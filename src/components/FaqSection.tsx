import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Mahafali yanafanyika lini?',
      a: '2 Oktoba 2026.',
    },
    {
      q: 'Mahafali yanafanyika wapi?',
      a: 'Tura Secondary School, Uyui, Tabora.',
    },
    {
      q: 'Picha zitaonekana wapi?',
      a: 'Kwenye sehemu ya Picha ya tovuti hii, ambapo picha za sherehe, wahitimu, walimu na shule zinapangwa kwa makundi na zinaweza kutazamwa kwa ukubwa kamili.',
    },
    {
      q: 'Nani anaweza kupakia picha?',
      a: 'Administrator aliyeidhinishwa kwa kuingia kwenye mfumo wa usimamizi (Admin Dashboard). Wageni wa kawaida wanaweza kutazama na kushiriki picha.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Majibu ya Maswali Muhimu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            ❓ MASWALI YA MARA KWA MARA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Maswali yanayoulizwa mara kwa mara kuhusu Mahafali ya Kidato cha Nne 2026 na mfumo wa picha wa Tura Secondary School.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
