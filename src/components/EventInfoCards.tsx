import React from 'react';
import { Calendar, GraduationCap, School, MapPin, Globe } from 'lucide-react';

export const EventInfoCards: React.FC = () => {
  const cards = [
    {
      title: 'TAREHE',
      value: '2 Oktoba 2026',
      sub: 'Ijumaa Kuu ya Mahafali',
      icon: Calendar,
      color: 'from-amber-500/20 to-amber-600/5',
      iconColor: 'text-amber-500',
      borderColor: 'border-amber-200/80 dark:border-amber-900/40',
    },
    {
      title: 'TUKIO',
      value: 'Mahafali ya Kidato cha Nne',
      sub: 'Form Four Graduation 2026',
      icon: GraduationCap,
      color: 'from-emerald-500/20 to-emerald-600/5',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200/80 dark:border-emerald-900/40',
    },
    {
      title: 'SHULE',
      value: 'Tura Secondary School',
      sub: 'Kituo cha Maarifa na Nidhamu',
      icon: School,
      color: 'from-blue-500/20 to-blue-600/5',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200/80 dark:border-blue-900/40',
    },
    {
      title: 'UKUMBI NA MAHALI',
      value: 'Bwalo la Tura Secondary School',
      sub: 'Tura, Wilaya ya Uyui, Tabora',
      icon: MapPin,
      color: 'from-purple-500/20 to-purple-600/5',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200/80 dark:border-purple-900/40',
    },
    {
      title: 'NCHI',
      value: 'Tanzania',
      sub: 'Jamhuri ya Muungano',
      icon: Globe,
      color: 'from-teal-500/20 to-teal-600/5',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-200/80 dark:border-teal-900/40',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-xl p-5 border bg-gradient-to-br ${card.color} ${card.borderColor} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                      {card.title}
                    </span>
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {card.value}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 text-xs text-slate-500 font-medium">
                  {card.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
