import React from 'react';
import { Calendar, Clock, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { INITIAL_SCHEDULE, SCHEDULE_DISCLAIMER } from '../data/schedule';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="ratiba" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Mpangilio wa Siku ya Mahafali</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            📋 RATIBA YA MAHAFALI
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Mpangilio wa matukio ya siku ya Ijumaa, 2 Oktoba 2026 katika Ukumbi wa Mahafali wa Tura Secondary School (Tura, Uyui, Tabora).
          </p>
        </div>

        {/* Prominent Mandatory Disclaimer Banner */}
        <div className="mb-10 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-4 shadow-sm">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="text-xs font-extrabold tracking-wide uppercase text-amber-900 block">
              {SCHEDULE_DISCLAIMER}
            </span>
            <span className="text-xs sm:text-sm text-amber-800">
              Ratiba hii ni ya kielelezo na muongozo. Uongozi wa shule na kamati ya mahafali wanaweza kuiboresha au kuibadilisha kulingana na mahitaji ya siku husika.
            </span>
          </div>
        </div>

        {/* Timetable List */}
        <div className="space-y-4">
          {INITIAL_SCHEDULE.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {/* Number / Time Indicator */}
                <div className="shrink-0 flex sm:flex-col items-center justify-center bg-slate-900 text-amber-300 rounded-lg px-3 py-2 text-xs font-bold font-mono tracking-tight sm:w-28 text-center">
                  <Clock className="w-3.5 h-3.5 mr-1 sm:mr-0 sm:mb-1 text-amber-400 inline sm:block" />
                  <span>{item.time}</span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.activity}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              {item.leader && (
                <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Msimamizi
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded inline-block mt-0.5">
                    {item.leader}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
