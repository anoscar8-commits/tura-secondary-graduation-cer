import React, { useState, useMemo } from 'react';
import {
  Upload,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  Trash2,
  Edit2,
  LogOut,
  Globe,
  Plus,
  Shield,
  Layers,
  Sparkles,
  Info,
  X,
  FileCheck,
  ChevronRight,
  Database,
  Cloud
} from 'lucide-react';
import { GalleryImage, GalleryCategory } from '../types/gallery';
import {
  addImage,
  addMultipleImages,
  updateImage,
  deleteImage,
  validateImageFile,
  fileToDataUrl,
  clearAdminSession,
  resetToInitialImages
} from '../lib/storage';

interface AdminDashboardProps {
  images: GalleryImage[];
  onRefreshImages: () => void;
  onClose: () => void;
  onLogout: () => void;
  onViewWebsite: () => void;
}

const CATEGORIES: Exclude<GalleryCategory, 'ZOTE'>[] = [
  'O-LEVEL WASICHANA',
  'O-LEVEL WAVULANA',
  'A-LEVEL',
  'WAHITIMU',
  'WALIMU',
  'MAHAFALI',
  'SHUGHULI',
  'SHULE',
  'PAMOJA',
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  images,
  onRefreshImages,
  onClose,
  onLogout,
  onViewWebsite,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'upload' | 'manage' | 'setup'>('upload');

  // Upload Form State
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCaption, setUploadCaption] = useState('');
  const [uploadCategory, setUploadCategory] = useState<Exclude<GalleryCategory, 'ZOTE'>>('MAHAFALI');
  const [uploadSource, setUploadSource] = useState('Tura Secondary School');
  const [uploadAttribution, setUploadAttribution] = useState('Idara ya Habari na Matukio Tura');
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Edit Modal State
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [editCategory, setEditCategory] = useState<Exclude<GalleryCategory, 'ZOTE'>>('MAHAFALI');
  const [editSource, setEditSource] = useState('');
  const [editAttribution, setEditAttribution] = useState('');

  // Delete Confirmation State
  const [deletingImageId, setDeletingImageId] = useState<string | null>(null);

  // Stats Counters (Prompt Section 24)
  const stats = useMemo(() => {
    return {
      total: images.length,
      olevelWasichana: images.filter((i) => i.category === 'O-LEVEL WASICHANA').length,
      olevelWavulana: images.filter((i) => i.category === 'O-LEVEL WAVULANA').length,
      alevel: images.filter((i) => i.category === 'A-LEVEL').length,
      wahitimu: images.filter((i) => i.category === 'WAHITIMU').length,
      mahafali: images.filter((i) => i.category === 'MAHAFALI').length,
    };
  }, [images]);

  // Handle file selection (Multiple files support)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    setUploadSuccessMessage(null);
    if (!e.target.files || e.target.files.length === 0) return;

    const filesArray = Array.from(e.target.files);

    // Validate each file
    for (const file of filesArray) {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        setUploadError(validation.error || 'Faili halikubaliki.');
        return;
      }
    }

    setSelectedFiles(filesArray);

    // Generate previews
    const previewUrls = filesArray.map((f) => URL.createObjectURL(f));
    setFilePreviews(previewUrls);

    // Auto set default title if empty
    if (!uploadTitle && filesArray.length === 1) {
      const cleanName = filesArray[0].name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setUploadTitle(cleanName);
    }
  };

  // Submit Upload Form (Multiple or Single)
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setUploadError('Tafadhali chagua picha angalau moja.');
      return;
    }

    setUploadError(null);
    setUploadSuccessMessage(null);
    setUploadProgress({ current: 0, total: selectedFiles.length });

    try {
      const newImagesData = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        setUploadProgress({ current: i + 1, total: selectedFiles.length });

        // Convert to dataUrl for persistence
        const dataUrl = await fileToDataUrl(file);

        // Derive title if multiple
        const titleToUse =
          selectedFiles.length === 1
            ? uploadTitle || 'Picha ya Mahafali 2026'
            : `${uploadTitle || 'Picha ya Mahafali'} (${i + 1})`;

        newImagesData.push({
          image_url: dataUrl,
          cloudinary_public_id: `tura_${Date.now()}_${i}`,
          title: titleToUse,
          caption: uploadCaption || 'Picha ya sherehe za Mahafali ya Kidato cha Nne 2026 Tura Secondary School.',
          category: uploadCategory,
          source: uploadSource || 'Tura Secondary School',
          attribution: uploadAttribution || 'Mpiga Picha Rasmi Tura',
          is_placeholder: false,
        });
      }

      addMultipleImages(newImagesData);
      onRefreshImages();

      setUploadSuccessMessage('✅ PICHA ZOTE ZIMEPAKIWA KIKAMILIFU');
      setSelectedFiles([]);
      setFilePreviews([]);
      setUploadTitle('');
      setUploadCaption('');
      setUploadProgress(null);
    } catch (err: any) {
      console.error(err);
      setUploadProgress(null);
      setUploadError('Samahani, picha haikuweza kupakiwa. Tafadhali jaribu tena.');
    }
  };

  // Open Edit Modal
  const handleStartEdit = (img: GalleryImage) => {
    setEditingImage(img);
    setEditTitle(img.title);
    setEditCaption(img.caption);
    setEditCategory(img.category);
    setEditSource(img.source || '');
    setEditAttribution(img.attribution || '');
  };

  // Save Edit Changes
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingImage) return;

    updateImage(editingImage.id, {
      title: editTitle,
      caption: editCaption,
      category: editCategory,
      source: editSource,
      attribution: editAttribution,
    });

    onRefreshImages();
    setEditingImage(null);
  };

  // Delete Image
  const handleConfirmDelete = () => {
    if (!deletingImageId) return;
    deleteImage(deletingImageId);
    onRefreshImages();
    setDeletingImageId(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col overflow-y-auto">
      {/* Top Admin Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 text-white px-4 sm:px-6 py-4 sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                Dashibodi ya Usimamizi (Admin)
              </h2>
              <span className="text-xs text-amber-300">
                Tura Secondary School · Mahafali 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onViewWebsite}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">🌐 TAZAMA WEBSITE</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ondoka</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              aria-label="Funga Dashibodi"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* STATS METRIC CARDS (Prompt Section 24) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              📸 JUMLA YA PICHA
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block">
              {stats.total}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              👧 O-LEVEL WASICHANA
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block">
              {stats.olevelWasichana}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              👦 O-LEVEL WAVULANA
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block">
              {stats.olevelWavulana}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              👩🏾 A-LEVEL
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 mt-1 block">
              {stats.alevel}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              🎓 WAHITIMU
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1 block">
              {stats.wahitimu}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">
              🎉 MAHAFALI
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 block">
              {stats.mahafali}
            </span>
          </div>
        </div>

        {/* Action Tabs / Quick Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'upload'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>+ PAKIA PICHA</span>
          </button>

          <button
            onClick={() => setActiveTab('manage')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'manage'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>📸 SIMAMIA PICHA ({images.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'setup'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>MIPANGILIO YA CLOUDINARY NA SUPABASE</span>
          </button>
        </div>

        {/* TAB 1: UPLOAD FORM */}
        {activeTab === 'upload' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-400" />
                  <span>📸 PAKIA PICHA ZA MAHAFALI</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Unaweza kuchagua picha moja au picha nyingi kwa pamoja (Multiple Upload). Picha zitaonekana mara moja kwenye galari ya umma.
                </p>
              </div>
            </div>

            {/* Success Alert */}
            {uploadSuccessMessage && (
              <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl flex items-center gap-3 text-emerald-300">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-bold text-sm">{uploadSuccessMessage}</span>
              </div>
            )}

            {/* Error Alert */}
            {uploadError && (
              <div className="mb-6 p-4 bg-red-950/80 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-sm">{uploadError}</span>
              </div>
            )}

            {/* Progress Bar */}
            {uploadProgress && (
              <div className="mb-6 p-4 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex justify-between text-xs font-bold text-amber-300 mb-2">
                  <span>Inapakia picha {uploadProgress.current} kati ya {uploadProgress.total}...</span>
                  <span>{Math.round((uploadProgress.current / uploadProgress.total) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full transition-all duration-300"
                    style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <form onSubmit={handleUploadSubmit} className="space-y-6">
              {/* File Dropzone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Chagua Picha (Unaweza kuchagua picha nyingi hadi 10MB kila moja)
                </label>
                <div className="border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-950/50 relative">
                  <input
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="w-10 h-10 text-amber-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">
                    Bofya hapa au buruta picha zako (Drag & Drop)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Aina zinazoruhusiwa: JPG, JPEG, PNG, WEBP (Kiwango cha juu: 10 MB kwa kila picha)
                  </p>
                  {selectedFiles.length > 0 && (
                    <div className="mt-3 inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40">
                      Picha {selectedFiles.length} zimechaguliwa
                    </div>
                  )}
                </div>
              </div>

              {/* Previews */}
              {filePreviews.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    Hakiki ya Picha Zilizochaguliwa ({filePreviews.length}):
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-h-48 overflow-y-auto p-2 bg-slate-950 rounded-xl border border-slate-800">
                    {filePreviews.map((url, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-700">
                        <img src={url} alt="Hakiki" className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 rounded">
                          #{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Kichwa cha Picha (Title)
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="mf. Wahitimu wa Kidato cha Nne wakishangilia"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Category (Kitengo cha Picha)
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Maelezo ya Picha (Caption)
                  </label>
                  <textarea
                    rows={2}
                    value={uploadCaption}
                    onChange={(e) => setUploadCaption(e.target.value)}
                    placeholder="Eleza kwa ufupi tukio linaloonekana kwenye picha hii..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Chanzo cha Picha (Source)
                  </label>
                  <input
                    type="text"
                    value={uploadSource}
                    onChange={(e) => setUploadSource(e.target.value)}
                    placeholder="Tura Secondary School"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Attribution / Mpiga Picha
                  </label>
                  <input
                    type="text"
                    value={uploadAttribution}
                    onChange={(e) => setUploadAttribution(e.target.value)}
                    placeholder="Idara ya Habari na Matukio Tura"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Uniform Guidelines Reminder inside Upload */}
              <div className="p-4 rounded-xl bg-slate-950 border border-amber-400/30 text-xs text-slate-300">
                <span className="font-bold text-amber-300 block mb-1">
                  Kumbukumbu ya Sare Kabla ya Kupakia (Uniform & Graduate Rules):
                </span>
                <span className="text-red-400 font-bold block mb-1">
                  ⛔ MARUFUKU: Wahitimu HAWAVAI majoho ya chuo kikuu wala kofia za majoho! Lazima wavae nguo hizo hizo rasmi za shule.
                </span>
                <span>• O-Level / Wahitimu (Wasichana: Sketi ya kijani + shati jeupe mikono mifupi; Wavulana: Suruali ya kijani + shati jeupe mikono mifupi)</span><br />
                <span>• A-Level (Wasichana pekee: Sketi ya blue-bahari + shati jeupe mikono mirefu; Hakuna wavulana A-Level)</span>
              </div>

              <button
                type="submit"
                disabled={selectedFiles.length === 0 || uploadProgress !== null}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>PAKIA PICHA {selectedFiles.length > 0 ? `(${selectedFiles.length})` : ''}</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: MANAGE & EDIT PHOTOS */}
        {activeTab === 'manage' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold">📸 SIMAMIA PICHA ZA GALARI</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Hariri kichwa, maelezo, kitengo au futa picha. Mabadiliko yanaonekana mara moja kwenye tovuti.
                </p>
              </div>

              <button
                onClick={() => {
                  if (confirm('Una uhakika unataka kurejesha picha za awali (Default Initial Photos)?')) {
                    resetToInitialImages();
                    onRefreshImages();
                  }
                }}
                className="text-xs text-slate-400 hover:text-amber-400 underline"
              >
                Rejesha Picha za Awali
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 mb-3">
                      <img src={img.image_url} alt={img.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 bg-slate-900/90 text-[10px] text-amber-300 font-bold px-2 py-0.5 rounded">
                        {img.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-white line-clamp-1">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {img.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">
                      {img.attribution || 'Tura Secondary'}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleStartEdit(img)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs flex items-center gap-1"
                        title="Hariri Picha"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Hariri</span>
                      </button>

                      <button
                        onClick={() => setDeletingImageId(img.id)}
                        className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 text-xs flex items-center gap-1"
                        title="Futa Picha"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Futa</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CLOUDINARY & SUPABASE CONFIGURATION INFO */}
        {activeTab === 'setup' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-400" />
                <span>MIPANGILIO YA CLOUDINARY & SUPABASE KWA VERCEL</span>
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Tovuti hii imejengwa kitaalamu ikiwa tayari kuunganishwa na akaunti yako ya Supabase na Cloudinary kwenye Vercel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <Database className="w-5 h-5" />
                  <h4>Supabase PostgreSQL</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Jedwali la <code>gallery_images</code> linahifadhi metadata ya kila picha:
                </p>
                <pre className="text-[11px] bg-slate-900 p-3 rounded-lg text-amber-300 font-mono overflow-x-auto">
{`CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  cloudinary_public_id TEXT,
  title TEXT NOT NULL,
  caption TEXT,
  category TEXT NOT NULL,
  source TEXT,
  attribution TEXT,
  is_placeholder BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);`}
                </pre>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                  <Cloud className="w-5 h-5" />
                  <h4>Cloudinary Image Storage</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Picha zote zinapakiwa moja kwa moja Cloudinary ili kuhakikisha kasi kubwa na ulinzi bila kuhifadhiwa kwenye mfumo wa faili wa Vercel.
                </p>
                <div className="text-xs space-y-1 text-slate-300 font-mono bg-slate-900 p-3 rounded-lg">
                  <div>CLOUDINARY_CLOUD_NAME=...</div>
                  <div>CLOUDINARY_API_KEY=...</div>
                  <div>CLOUDINARY_API_SECRET=...</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* EDIT PHOTO MODAL */}
      {editingImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <h4 className="text-lg font-bold">Hariri Taarifa za Picha</h4>
              <button onClick={() => setEditingImage(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Kichwa cha Picha (Title)
                </label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Maelezo (Caption)
                </label>
                <textarea
                  rows={2}
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Chanzo (Source)
                </label>
                <input
                  type="text"
                  value={editSource}
                  onChange={(e) => setEditSource(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Attribution / Mpiga Picha
                </label>
                <input
                  type="text"
                  value={editAttribution}
                  onChange={(e) => setEditAttribution(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingImage(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  GHAIRI
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  HIFADHI MABADILIKO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION DIALOG (Prompt Section 32) */}
      {deletingImageId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 text-white shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-red-900/40 border border-red-500/40 flex items-center justify-center mx-auto mb-4 text-red-400">
              <Trash2 className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-bold text-white mb-2">
              Una uhakika unataka kufuta picha hii?
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Hatua hii itafuta picha hii moja kwa moja kutoka kwenye galari na hifadhi ya picha.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeletingImageId(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                GHAIRI
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors shadow-lg shadow-red-600/20"
              >
                FUTA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
