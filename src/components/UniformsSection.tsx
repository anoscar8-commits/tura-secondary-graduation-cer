import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Shirt, Info, Building } from 'lucide-react';
import olevelImg from '../assets/images/tura_olevel_majengo_1790937459048.jpg';
import alevelImg from '../assets/images/tura_alevel_masweta_blue_1790939150904.jpg';

interface UniformsSectionProps {
  onFilterCategory?: (category: string) => void;
}

export const UniformsSection: React.FC<UniformsSectionProps> = ({ onFilterCategory }) => {
  return (
    <section id="sare" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full mb-3">
            <Shirt className="w-3.5 h-3.5 text-amber-400" />
            <span>Wanafunzi wa Shule ya Sekondari Tura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            👥 WANAFUNZI WA O-LEVEL NA A-LEVEL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Shule ya Sekondari Tura inajumuisha wanafunzi wa O-Level (Kidato cha I–IV) na A-Level (Kidato cha V–VI Wasichana Pekee) katika mazingira tulivu ya kitaaluma mbele ya majengo ya kawaida ya chini yenye rangi ya Blue Bahari kwa chini na Kaki kwa juu.
          </p>
        </div>

        {/* 3 Main Student Group Representations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. O-Level Wasichana */}
          <div className="bg-slate-800/80 rounded-2xl border border-emerald-500/30 overflow-hidden flex flex-col shadow-xl">
            <div className="relative h-60 overflow-hidden bg-slate-950">
              <img
                src={olevelImg}
                alt="Wanafunzi wa O-Level Wasichana - Tura Secondary"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                O-LEVEL (Kidato I–IV)
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">👧 Wasichana wa O-Level</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded">
                    Kidato cha I–IV
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Wanafunzi wa kike wa Kidato cha Kwanza hadi cha Nne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Kujenga maarifa katika masomo ya Sayansi, Sanaa na Biashara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Kukuza maadili mema, heshima na bidii ya kitaaluma</span>
                  </li>
                </ul>
              </div>

              {onFilterCategory && (
                <button
                  onClick={() => onFilterCategory('O-LEVEL WASICHANA')}
                  className="mt-6 w-full py-2.5 text-xs font-bold rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Tazama Picha za O-Level Wasichana</span>
                </button>
              )}
            </div>
          </div>

          {/* 2. O-Level Wavulana */}
          <div className="bg-slate-800/80 rounded-2xl border border-emerald-500/30 overflow-hidden flex flex-col shadow-xl">
            <div className="relative h-60 overflow-hidden bg-slate-950">
              <img
                src={olevelImg}
                alt="Wanafunzi wa O-Level Wavulana - Tura Secondary"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                O-LEVEL (Kidato I–IV)
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">👦 Wavulana wa O-Level</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded">
                    Kidato cha I–IV
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Wanafunzi wa kiume wa Kidato cha Kwanza hadi cha Nne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Kujituma katika masomo, michezo na shughuli mbalimbali za shule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Uzalendo, nidhamu na uwajibikaji kwa jamii na taifa</span>
                  </li>
                </ul>
              </div>

              {onFilterCategory && (
                <button
                  onClick={() => onFilterCategory('O-LEVEL WAVULANA')}
                  className="mt-6 w-full py-2.5 text-xs font-bold rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Tazama Picha za O-Level Wavulana</span>
                </button>
              )}
            </div>
          </div>

          {/* 3. A-Level Wasichana Pekee */}
          <div className="bg-slate-800/80 rounded-2xl border border-sky-500/40 overflow-hidden flex flex-col shadow-xl">
            <div className="relative h-60 overflow-hidden bg-slate-950">
              <img
                src={alevelImg}
                alt="Wanafunzi wa A-Level Wasichana - Tura Secondary"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                A-LEVEL (Kidato V–VI)
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">👩🏾 Wasichana wa A-Level</h3>
                  <span className="text-xs bg-sky-500/20 text-sky-300 font-semibold px-2 py-0.5 rounded">
                    Kidato cha Juu
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Wanafunzi wa Kidato cha Tano na Sita (Kidato cha V–VI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Mchepuo wa masomo ya juu kujiandaa na elimu ya vyuo vikuu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Kituo maalum cha kukuza vipaji na uongozi wa wasichana</span>
                  </li>
                </ul>
              </div>

              {onFilterCategory && (
                <button
                  onClick={() => onFilterCategory('A-LEVEL')}
                  className="mt-6 w-full py-2.5 text-xs font-bold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Tazama Picha za A-Level</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Strict Rules Warning Box */}
        <div className="mt-12 bg-slate-950/90 rounded-2xl border-2 border-amber-400/40 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-bold text-amber-300">
              KANUNI KALI ZA UTAMBULISHO WA SARE NA WAHITIMU (STRICT RULES)
            </h3>
          </div>

          {/* Prominent Gowns Ban Notice */}
          <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/50 flex items-start gap-3">
            <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-red-300 block font-bold uppercase tracking-wide">
                MARUFUKU: WAHITIMU HAWAVAI MAJOHO YA CHUO KIKUU
              </strong>
              <span className="text-slate-300">
                Wahitimu wa Kidato cha Nne wanavaa <strong>nguo hizo hizo za shule</strong> (Wasichana: Sketi ya kijani + shati jeupe mikono mifupi; Wavulana: Suruali ya kijani + shati jeupe mikono mifupi). Ni marufuku kuvaa majoho ya wahitimu wa vyuo vikuu au kofia za majoho (mortarboards).
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span><strong>HAPANA:</strong> Kamwe wasichana wa O-Level hawaruhusiwi kuvaa sketi za blue-bahari.</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span><strong>HAPANA:</strong> Kamwe wasichana wa A-Level hawaruhusiwi kuvaa sketi za kijani za O-Level.</span>
              </div>
            </div>

            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span><strong>HAPANA:</strong> Wanafunzi wa O-Level hawaruhusiwi mashati ya mikono mirefu.</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span><strong>HAPANA:</strong> Wasichana wa A-Level hawaruhusiwi mashati ya mikono mifupi; na hakuna wavulana wa A-Level.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
