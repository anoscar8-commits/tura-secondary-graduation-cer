import React from 'react';
import { BookOpen, Trophy, Users, GraduationCap, HeartHandshake, Sparkles, School, Paintbrush, Trees } from 'lucide-react';
import campusImg from '../assets/images/tura_shule_majengo_kawaida_1790937723081.jpg';

export const SchoolLifeSection: React.FC = () => {
  const cards = [
    {
      title: '📚 MASOMO',
      desc: 'Maisha ya kujifunza na kujenga maarifa.',
      detail: 'Mazingira tulivu ya madarasa, maktaba na vipindi vinavyochochea uelewa mpana wa taaluma.',
      icon: BookOpen,
      color: 'border-blue-200 bg-blue-50/50 text-blue-700',
    },
    {
      title: '⚽ MICHEZO',
      desc: 'Michezo na shughuli za wanafunzi.',
      detail: 'Kujenga afya, vipaji na nidhamu ya michezo ya mpira wa miguu, pete, riadha na michezo ya ndani.',
      icon: Trophy,
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
    },
    {
      title: '👩🏾🏫 WALIMU',
      desc: 'Uongozi na malezi ya kielimu.',
      detail: 'Walimu wenye weledi na upendo wanaoongoza wanafunzi kwa maadili, nidhamu na motisha ya kimasomo.',
      icon: Users,
      color: 'border-amber-200 bg-amber-50/50 text-amber-700',
    },
    {
      title: '🎓 WAHITIMU',
      desc: 'Safari ya wanafunzi kuelekea hatua inayofuata.',
      detail: 'Maandalizi ya mitihani ya taifa na mwendelezo kuelekea kidato cha tano, vyuo vya ufundi na uongozi.',
      icon: GraduationCap,
      color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
    },
    {
      title: '🤝 USHIRIKIANO',
      desc: 'Ushirikiano kati ya shule, wazazi na jamii.',
      detail: 'Ushiriki thabiti wa wazazi na viongozi wa kijiji cha Tura katika kusaidia maendeleo ya shule.',
      icon: HeartHandshake,
      color: 'border-rose-200 bg-rose-50/50 text-rose-700',
    },
    {
      title: '🎉 SHUGHULI ZA SHULE',
      desc: 'Matukio mbalimbali ya shule.',
      detail: 'Sherehe za mahafali, midahalo, maonyesho ya sayansi na siku maalum za shule.',
      icon: Sparkles,
      color: 'border-purple-200 bg-purple-50/50 text-purple-700',
    },
  ];

  return (
    <section id="shule" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Mazingira na Utamaduni Wetu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            🏫 MAISHA YA TURA SECONDARY SCHOOL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Shule ya Sekondari Tura iliyopo Wilaya ya Uyui, Mkoa wa Tabora, ni kituo cha malezi bora, maarifa na fursa za kukuza vipaji vya wanafunzi.
          </p>
        </div>

        {/* Featured Campus Banner with Exact Building Colors */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative h-72 sm:h-96">
          <img
            src={campusImg}
            alt="Majengo ya Tura Secondary School yenye rangi ya Blue Bahari kwa chini na Kaki kwa juu"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
                <Paintbrush className="w-3.5 h-3.5 text-sky-300" />
                <span>Majengo ya Kawaida ya Chini: Blue Bahari kwa Chini · Kaki kwa Juu</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mt-1">
                Tura, Uyui District, Tabora Region
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">
                Mazingira Mazuri, Safi na ya Kuvutia ya Majengo ya Chini ya Shule
              </h3>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${c.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    {c.desc}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                  Tura Secondary School · Utamaduni wa Shule
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
