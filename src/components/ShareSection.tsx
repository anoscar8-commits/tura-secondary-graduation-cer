import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Facebook, Sparkles } from 'lucide-react';

export const ShareSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Dynamic URL resolution
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href.split('#')[0];
    }
    return 'https://turasecondary.ac.tz';
  };

  const handleCopyLink = () => {
    const url = getCurrentUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const url = getCurrentUrl();
    const message = `🎓 Leo ni siku ya Mahafali ya Kidato cha Nne – 2026 ya Tura Secondary School, Uyui, Tabora. Tazama picha na taarifa za mahafali hapa: ${url}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleFacebookShare = () => {
    const url = getCurrentUrl();
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full mb-3">
          <Share2 className="w-3.5 h-3.5" />
          <span>Kuza Taarifa za Shule</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
          📲 SHIRIKI MAHAFALI
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Sambaza furaha ya mahafali kwa ndugu, jamaa, marafiki na wananchi wa Tabora kwa kubofya vitufe hapa chini:
        </p>

        {/* Share Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppShare}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Shiriki Kupitia WhatsApp</span>
          </button>

          {/* Facebook Button */}
          <button
            onClick={handleFacebookShare}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Facebook className="w-5 h-5 fill-white" />
            <span>Facebook</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
              copied
                ? 'bg-amber-400 text-slate-950 border-amber-400'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span>{copied ? 'Kiunganishi Kimenakiliwa!' : 'Nakili Kiunganishi (Copy Link)'}</span>
          </button>
        </div>

        {/* Pre-formatted message preview */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-black/30 border border-white/10 text-left text-xs text-slate-300">
          <span className="font-bold text-amber-300 block mb-1">
            Ujumbe Utakaotumwa:
          </span>
          <p className="italic">
            "🎓 Leo ni siku ya Mahafali ya Kidato cha Nne – 2026 ya Tura Secondary School, Uyui, Tabora. Tazama picha na taarifa za mahafali hapa: [Tovuti]"
          </p>
        </div>
      </div>
    </section>
  );
};
