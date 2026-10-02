import React from 'react';
import { Shirt, Camera, Award, Sparkles, Star, CheckCircle2, Building2 } from 'lucide-react';
import wahitimuNdaniBwaloTieImg from '../assets/images/tura_wahitimu_ndani_bwalo_tie_1790939305446.jpg';

interface GraduatesSectionProps {
  onViewGraduatesPhotos: () => void;
}

export const GraduatesSection: React.FC<GraduatesSectionProps> = ({ onViewGraduatesPhotos }) => {
  return (
    <section id="wahitimu" className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 text-white shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full mb-4">
                <Shirt className="w-4 h-4 text-emerald-400" />
                <span>Kizazi cha Ushindi · Sare za Shule & Necktai ya Kijani</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
                🎓 WAHITIMU WA KIDATO CHA NNE – 2026
              </h2>

              <p className="mt-4 text-xl sm:text-2xl font-bold text-amber-300">
                Hongereni Wahitimu wa Kidato cha Nne – 2026!
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Mmepitia miaka minne ya kujifunza, kukuza maarifa, nidhamu na urafiki wa kudumu katika viwanja na majengo tulivu ya chini ya Shule ya Sekondari Tura. Siku hii ya leo inathibitisha ujasiri na ari yenu ya kufaulu.
              </p>

              {/* Strict Uniform & Green Necktie & Single-Storey Bwalo Reminder Card */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sare Rasmi za Wahitimu: Mashati Meupe & Necktai ya Kijani</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wahitimu wa Kidato cha Nne wanasherehekea wakiwa wamevalia <strong>sare zao halisi za shule zenye necktai ya kijani</strong> (sketi/suruali za kijani, mashati meupe mikono mifupi na tai ya kijani iliyofungwa shingoni) bila majoho ya chuo kikuu. Sherehe inafanyika kwenye <strong>Bwalo la Tura Secondary School</strong> lililopakwa rangi ya Blue Bahari kwa chini na Kaki kwa juu.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <Star className="w-4 h-4" />
                    <span>Nidhamu na Maadili</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Kielelezo chema cha wanafunzi wenye heshima na uzalendo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <Award className="w-4 h-4" />
                    <span>Bidii ya Taaluma</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Kujituma katika masomo ya Sayansi, Sanaa na Biashara.
                  </p>
                </div>
              </div>

              {/* CTA button connecting to gallery */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={onViewGraduatesPhotos}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Camera className="w-4 h-4" />
                  <span>Tazama Picha za Wahitimu Kwenye Galari</span>
                </button>
              </div>
            </div>

            {/* Right side banner image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl">
                <img
                  src={wahitimuNdaniBwaloTieImg}
                  alt="Wahitimu wa Kidato cha Nne 2026 Tura Secondary School katika Sare na Necktai Ndani ya Bwalo"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">
                    Tura Secondary School · Uyui, Tabora
                  </span>
                  <span className="text-sm font-bold text-white">
                    Wahitimu Katika Sare na Necktai Ndani ya Bwalo — 2 Oktoba 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

