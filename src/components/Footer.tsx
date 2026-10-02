import React from 'react';
import { GraduationCap, Shield } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, isAdminLoggedIn }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-slate-900 border border-amber-400/40 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  TURA SECONDARY SCHOOL
                </h3>
                <p className="text-xs text-amber-300 font-medium uppercase tracking-wider">
                  Mahafali ya Kidato cha Nne – 2026
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Tura, Uyui, Tabora – Tanzania
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Tovuti rasmi ya kumbukumbu na picha za Mahafali ya 2 Oktoba 2026.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Viunganishi vya Tovuti
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              <a href="#mwanzo" className="hover:text-amber-300 transition-colors">
                Mwanzo
              </a>
              <a href="#kuhusu" className="hover:text-amber-300 transition-colors">
                Kuhusu
              </a>
              <a href="#picha" className="hover:text-amber-300 transition-colors">
                Picha
              </a>
              <a href="#ratiba" className="hover:text-amber-300 transition-colors">
                Ratiba
              </a>
              <a href="#wahitimu" className="hover:text-amber-300 transition-colors">
                Wahitimu
              </a>
              <a href="#mawasiliano" className="hover:text-amber-300 transition-colors">
                Mawasiliano
              </a>
            </div>
          </div>

          {/* Admin Portal Shortcut */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Usimamizi
            </h4>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-3 py-2 rounded-lg transition-colors w-full justify-center"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAdminLoggedIn ? 'Dashibodi ya Admin' : 'Ingia kama Admin'}</span>
            </button>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© 2026 Tura Secondary School. Haki zote zimehifadhiwa.</p>
        </div>
      </div>
    </footer>
  );
};
