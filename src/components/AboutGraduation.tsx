import React from 'react';
import { BookOpen, Award, Compass, Heart, Users, ShieldCheck, CheckCircle } from 'lucide-react';

export const AboutGraduation: React.FC = () => {
  const pillars = [
    {
      title: 'Elimu na Maarifa',
      desc: 'Kutunuku miaka minne ya kujifunza, kuchunguza na kujenga misingi imara ya kitaaluma kwa wahitimu wetu.',
      icon: BookOpen,
      accent: 'text-blue-600',
    },
    {
      title: 'Kazi ya Bidii',
      desc: 'Kuheshimu jitihada za kila siku, usiku wa kujisomea, mitihani na ustahimilivu wa wanafunzi.',
      icon: Award,
      accent: 'text-amber-500',
    },
    {
      title: 'Nidhamu na Maadili',
      desc: 'Kusimamia nidhamu njema inayojenga tabia ya uwajibikaji, unyenyekevu na uzalendo shuleni na uraiani.',
      icon: Compass,
      accent: 'text-emerald-600',
    },
    {
      title: 'Ushindi wa Wanafunzi',
      desc: 'Kusherehekea hatua kubwa ya kuhitimu Kidato cha Nne kama lango la kuelekea elimu ya juu na fursa za maisha.',
      icon: ShieldCheck,
      accent: 'text-indigo-600',
    },
    {
      title: 'Mchango wa Walimu',
      desc: 'Kutambua moyo wa kujitolea, uvumilivu na ufundishaji wenye weledi wa walimu wetu wa Tura Secondary.',
      icon: Users,
      accent: 'text-rose-600',
    },
    {
      title: 'Wazazi, Walezi na Jamii',
      desc: 'Kutoa heshima kwa wazazi, walezi na wananchi wa Tura na Uyui kwa malezi, maombi na uwezeshaji wa watoto.',
      icon: Heart,
      accent: 'text-teal-600',
    },
  ];

  return (
    <section id="kuhusu" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
            <span>Sikukuu ya Elimu na Mafanikio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            🎓 KUHUSU MAHAFALI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Mahafali ya Kidato cha Nne ni tukio la kipekee la kihistoria linaloashiria hitimisho la miaka minne ya safari ya elimu ya sekondari ya awali katika Shule ya Sekondari Tura. Siku hii inajumuisha furaha, heshima na matumaini mapya kwa wahitimu wetu, wazazi, walimu na jamii nzima ya Wilaya ya Uyui na Mkoa wa Tabora.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${item.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Msingi Imara wa Tura</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
