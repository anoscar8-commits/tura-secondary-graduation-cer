import React from 'react';
import { Quote, Sparkles, Compass, HeartHandshake } from 'lucide-react';

export const GraduationMessage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Wosia na Maono ya Shule</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
          💙 UJUMBE KWA WAHITIMU
        </h2>

        {/* Quote Card */}
        <div className="mt-8 relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-md shadow-2xl">
          <Quote className="w-12 h-12 text-amber-400/40 mx-auto mb-6 transform -rotate-12" />
          
          <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed sm:leading-loose">
            "Safari yenu haishii hapa. Endeleeni kujifunza, kufanya kazi kwa bidii, kuwa na nidhamu na kuamini katika uwezo wenu. Kila hatua mnayochukua leo iwe mwanzo wa safari mpya yenye matumaini na mafanikio."
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-slate-300">
            <span className="font-semibold text-amber-300">
              — Uongozi na Bodi ya Shule ya Sekondari Tura
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span>Tura, Uyui, Tabora</span>
          </div>
        </div>

        {/* 3 Core Values for Graduates */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Kuwa na Malengo</h4>
              <p className="text-xs text-slate-300 mt-1">
                Weka dira sahihi ya maisha, zingatia elimu ya juu na stadi za maisha.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Nidhamu Isiyo na Shaka</h4>
              <p className="text-xs text-slate-300 mt-1">
                Tabia njema na heshima ndio nguzo kuu itakayowafungulia milango.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <HeartHandshake className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Mshikamano na Jamii</h4>
              <p className="text-xs text-slate-300 mt-1">
                Kumbukeni nyumbani Tura na kuitumikia nchi yetu Tanzania kwa uzalendo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
