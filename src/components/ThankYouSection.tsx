import React from 'react';
import { Heart, Users, GraduationCap, Award, Building, Sparkles } from 'lucide-react';

export const ThankYouSection: React.FC = () => {
  const acknowledgments = [
    {
      group: 'Wazazi na Walezi',
      desc: 'Asanteni kwa kujinyima, ada, malezi bora ya nyumbani na maombi yasiyokoma kwa watoto hawa hadi kufikia leo.',
      icon: Heart,
      badge: 'Malezi Imara',
      color: 'border-rose-200 hover:border-rose-300',
      iconBg: 'bg-rose-50 text-rose-600',
    },
    {
      group: 'Walimu Wetu',
      desc: 'Shukrani za dhati kwa kujitoa kwa moyo mweupe darasani na nje ya darasa kuwaandaa wahitimu kuwa raia wema na wenye maarifa.',
      icon: Award,
      badge: 'Moyo wa Kujitolea',
      color: 'border-amber-200 hover:border-amber-300',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      group: 'Wanafunzi na Wahitimu',
      desc: 'Hongereni kwa ustahimilivu, urafiki, kushirikiana katika kazi za shule na kuheshimu sheria na kanuni za shule yetu.',
      icon: GraduationCap,
      badge: 'Ustahimilivu',
      color: 'border-emerald-200 hover:border-emerald-300',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      group: 'Wageni Waalikwa',
      desc: 'Asanteni kwa kuacha shughuli zenu na kufika hapa Tura kujumuika nasi katika siku hii adhimu ya sherehe.',
      icon: Users,
      badge: 'Ukarimu',
      color: 'border-blue-200 hover:border-blue-300',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      group: 'Jamii ya Tura na Uyui',
      desc: 'Shukrani kwa ulinzi, ushirikiano na kuendelea kuwa mazingira rafiki na salama kwa watoto wetu kujifunzia.',
      icon: Building,
      badge: 'Ushirikiano wa Kijamii',
      color: 'border-purple-200 hover:border-purple-300',
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      group: 'Kamati ya Maandalizi',
      desc: 'Shukrani kwa kila mmoja aliyeshiriki kupanga, kupamba ukumbi, kupika na kuhakikisha sherehe hii inafana kwa asilimia mia moja.',
      icon: Sparkles,
      badge: 'Uratibu Mahiri',
      color: 'border-teal-200 hover:border-teal-300',
      iconBg: 'bg-teal-50 text-teal-600',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-600" />
            <span>Kutambua Mchango wa Kila Mmoja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            ❤️ SHUKRANI ZA DHATI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Mafanikio haya ya Kidato cha Nne 2026 ni matokeo ya umoja, upendo na mshikamano mkubwa kati ya shule, familia na jamii nzima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acknowledgments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-50/70 rounded-xl p-6 border ${item.color} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.group}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-400">
                  Tura Secondary School · 2026
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
