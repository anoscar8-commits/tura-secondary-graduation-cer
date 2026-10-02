import React, { useState } from 'react';
import { Camera, Calendar, Award, Sparkles, MapPin, ChevronDown, Shirt, Building2 } from 'lucide-react';
import { getEventDateStatus } from '../lib/dateUtils';
import heroBg from '../assets/images/tura_wahitimu_tie_hero_1790938224235.jpg';

interface HeroSectionProps {
  onScrollToGallery: () => void;
  onScrollToAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToGallery,
  onScrollToAbout,
}) => {
  // Date state (defaults to real current time)
  const [simulatedDate, setSimulatedDate] = useState<Date | undefined>(undefined);
  const dateStatus = getEventDateStatus(simulatedDate);

  return (
    <section id="mwanzo" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Wahitimu wa Shule ya Sekondari Tura katika Sare za Shule nje ya Bwalo"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition-all duration-1000 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Institutional Kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-300/90 mb-3">
          <span>JAMHURI YA MUUNGANO WA TANZANIA</span>
          <span aria-hidden="true">·</span>
          <span>WILAYA YA UYUI, TABORA</span>
        </div>

        {/* Primary Welcome Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white max-w-4xl drop-shadow-md">
          KARIBU TURA SECONDARY SCHOOL
        </h1>

        {/* Graduation Title & Subtitle */}
        <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300 tracking-wide">
          🎓 MAHAFALI YA KIDATO CHA NNE – 2026
        </h2>

        {/* Badges for Uniform with Green Necktie and Single-storey Bwalo building */}
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
            <Shirt className="w-3.5 h-3.5 text-emerald-400" />
            <span>Wahitimu Katika Sare za Shule & Necktai ya Kijani · Bila Majoho</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-sky-950/80 border border-sky-400/40 text-sky-300 px-3 py-1 rounded-full text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Bwalo la Tura Secondary School · Majengo ya Chini ya Blue & Kaki</span>
          </div>
        </div>

        {/* Location & Date Line */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm sm:text-base text-slate-300 font-medium">
          <span className="inline-flex items-center gap-1.5 text-amber-200">
            <Calendar className="w-4 h-4 text-amber-400" />
            2 OKTOBA 2026
          </span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="inline-flex items-center gap-1.5 text-slate-200">
            <MapPin className="w-4 h-4 text-emerald-400" />
            TURA, UYUI – TABORA, TANZANIA
          </span>
        </div>

        {/* PROMINENT DYNAMIC DATE BANNER */}
        <div className="mt-8 w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-blue-950/80 border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Dynamic Event Status Heading */}
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-3 drop-shadow">
              <span>{dateStatus.message}</span>
            </h3>

            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {dateStatus.subMessage}
            </p>

            {/* Event status subtitle indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tarehe Rasmi: 2 Oktoba 2026 · Tura, Tabora</span>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onScrollToGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Camera className="w-4 h-4 text-slate-950" />
            <span>📸 TAZAMA PICHA</span>
          </button>

          <button
            onClick={onScrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-slate-800/90 text-white hover:bg-slate-700/90 border border-slate-700 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>🎓 KUHUSU MAHAFALI</span>
          </button>
        </div>

        {/* Date Simulation Controls (Allows user to inspect 'Kabla ya Mahafali', 'Leo 2 Oktoba', 'Baada ya Mahafali') */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 max-w-md w-full">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              Jaribu Hali ya Tarehe (Date Logic Demo):
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setSimulatedDate(new Date('2026-09-25T10:00:00Z'))}
                className={`px-2.5 py-1 rounded transition-colors ${
                  simulatedDate?.toISOString().startsWith('2026-09-25')
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Kabla (25 Sept)
              </button>
              <button
                type="button"
                onClick={() => setSimulatedDate(new Date('2026-10-02T10:00:00Z'))}
                className={`px-2.5 py-1 rounded transition-colors ${
                  (simulatedDate?.toISOString().startsWith('2026-10-02') || simulatedDate === undefined)
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Leo (2 Oktoba)
              </button>
              <button
                type="button"
                onClick={() => setSimulatedDate(new Date('2026-10-05T10:00:00Z'))}
                className={`px-2.5 py-1 rounded transition-colors ${
                  simulatedDate?.toISOString().startsWith('2026-10-05')
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Baada (5 Oktoba)
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center text-slate-400 text-xs animate-bounce">
          <ChevronDown className="w-5 h-5 text-amber-400" />
        </div>
      </div>
    </section>
  );
};
