import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Info,
  Calendar,
  Layers,
  Sparkles,
  Shield,
  Download,
  Check
} from 'lucide-react';
import { GalleryImage, GalleryCategory } from '../types/gallery';
import { formatSwahiliDate } from '../lib/dateUtils';

interface GallerySectionProps {
  images: GalleryImage[];
  selectedCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  onOpenUpload?: () => void;
  isAdminLoggedIn?: boolean;
}

const CATEGORIES: GalleryCategory[] = [
  'ZOTE',
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

export const GallerySection: React.FC<GallerySectionProps> = ({
  images,
  selectedCategory,
  onSelectCategory,
  onOpenUpload,
  isAdminLoggedIn,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter images by category and search
  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      const matchesCategory =
        selectedCategory === 'ZOTE' || img.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        img.title.toLowerCase().includes(q) ||
        img.caption.toLowerCase().includes(q) ||
        img.category.toLowerCase().includes(q) ||
        (img.source && img.source.toLowerCase().includes(q)) ||
        (img.attribution && img.attribution.toLowerCase().includes(q))
      );
    });
  }, [images, selectedCategory, searchQuery]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredImages.length]);

  const activeImage = activeLightboxIndex !== null ? filteredImages[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleShareImage = (img: GalleryImage) => {
    const shareUrl = `${window.location.origin}/#picha`;
    if (navigator.share) {
      navigator.share({
        title: `${img.title} · Tura Secondary School`,
        text: `Tazama picha hii ya Mahafali ya Tura Secondary School: ${img.title}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="picha" className="py-20 bg-slate-100/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Kumbukumbu na Matukio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              📸 PICHA ZA TURA SECONDARY SCHOOL
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Gundua matukio, picha za wahitimu, walimu, mazingira ya shule na sherehe za Mahafali ya Kidato cha Nne 2026.
            </p>
          </div>

          {/* Quick upload shortcut for admin */}
          {onOpenUpload && (
            <div className="shrink-0">
              <button
                onClick={onOpenUpload}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>+ Pakia Picha Mpya</span>
              </button>
            </div>
          )}
        </div>

        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tafuta picha kwa jina, maelezo, au kitengo..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-medium text-slate-500 flex items-center gap-2 self-start sm:self-auto px-2">
            <span>Inaonyesha picha:</span>
            <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
              {filteredImages.length} kati ya {images.length}
            </span>
          </div>
        </div>

        {/* Category Filters (Clean Segmented Tabs - Anti-Slop Zero-Pill) */}
        <div className="relative mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none custom-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`shrink-0 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        {filteredImages.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-xl mx-auto my-12">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              Hakuna Picha Katika Sehemu Hii
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Jaribu kubadilisha kitengo au neno ulilotafuta, au msimamizi anaweza kupakia picha mpya mtandaoni.
            </p>
            {onOpenUpload && (
              <button
                onClick={onOpenUpload}
                className="mt-5 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Pakia Picha Sasa
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={img.image_url}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle top category indicator */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/10">
                    {img.category}
                  </div>

                  {/* Placeholder flag note if applicable */}
                  {img.is_placeholder && (
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700">
                      Kielelezo
                    </div>
                  )}

                  {/* Hover action icon */}
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 backdrop-blur rounded-full text-slate-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {img.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {img.caption}
                    </p>
                  </div>

                  {/* Source & Date Attribution Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate max-w-[180px]" title={img.attribution || img.source}>
                      {img.attribution || 'Tura Secondary School'}
                    </span>
                    <span className="shrink-0">
                      {formatSwahiliDate(img.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeImage && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 text-white"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar: Counter & Controls */}
          <div
            className="w-full max-w-6xl flex items-center justify-between z-10 py-2 border-b border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-amber-300">
                Picha {activeLightboxIndex + 1} ya {filteredImages.length}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">·</span>
              <span className="text-xs uppercase tracking-wider text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded hidden sm:inline">
                {activeImage.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShareImage(activeImage)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                title="Shiriki picha hii"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedLink ? 'Imenakiliwa!' : 'Shiriki'}</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                title="Skrini Kamili"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-red-900/60 text-slate-200 hover:text-white transition-colors"
                title="Funga (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center: Image & Navigation Arrows */}
          <div
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-3 overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all"
              aria-label="Picha iliyopita"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main image */}
            <img
              src={activeImage.image_url}
              alt={activeImage.title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all"
            />

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all"
              aria-label="Picha inayofuata"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Title, Caption, Source & Attribution Info */}
          <div
            className="w-full max-w-4xl bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 text-center sm:text-left z-10 shadow-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {activeImage.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeImage.caption}
                </p>
              </div>
            </div>

            {/* Detailed Provenance Metadata */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {activeImage.source && (
                  <span>
                    <strong>Chanzo:</strong> {activeImage.source}
                  </span>
                )}
                {activeImage.attribution && (
                  <span>
                    <strong>Miliki / Mpiga Picha:</strong> {activeImage.attribution}
                  </span>
                )}
                {activeImage.usage_permission && (
                  <span>
                    <strong>Ruhusa:</strong> {activeImage.usage_permission}
                  </span>
                )}
              </div>
              <div>
                <span>{formatSwahiliDate(activeImage.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
