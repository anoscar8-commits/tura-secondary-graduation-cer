import React from 'react';
import { MapPin, School, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="mawasiliano" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Eneo la Shule</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
          📍 TURA SECONDARY SCHOOL
        </h2>

        {/* Verified Location Card */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <School className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Shule ya Sekondari Tura
          </h3>

          <p className="mt-2 text-base font-semibold text-slate-700">
            Tura, Uyui District, Tabora Region, Tanzania
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Halmashauri ya Wilaya ya Uyui · Mkoa wa Tabora
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Taarifa Rasmi za Eneo la Shule</span>
          </div>
        </div>
      </div>
    </section>
  );
};
