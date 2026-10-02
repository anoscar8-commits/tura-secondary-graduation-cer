import React, { useState } from 'react';
import { Shield, Lock, Mail, Eye, EyeOff, AlertCircle, X, CheckCircle } from 'lucide-react';
import { setAdminSession } from '../lib/storage';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      // Validate credentials
      // Default credentials for administration: admin@tura.ac.tz / Tura2026!
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      if (
        (cleanEmail === 'admin@tura.ac.tz' || cleanEmail === 'admin@turasecondary.ac.tz' || cleanEmail === 'admin') &&
        (cleanPassword === 'Tura2026!' || cleanPassword === 'admin123' || cleanPassword === 'tura2026')
      ) {
        setAdminSession(rememberMe);
        setLoading(false);
        onLoginSuccess();
      } else {
        setLoading(false);
        setError('Barua pepe au nenosiri si sahihi. Tafadhali thibitisha taarifa zako.');
      }
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg"
            aria-label="Funga"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-amber-400" />
          </div>

          <h3 className="text-xl font-bold tracking-tight">
            Kuingia kwa Msimamizi (Admin)
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Usimamizi wa picha na taarifa za Tura Secondary School Mahafali 2026.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Barua Pepe ya Msimamizi (Email)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tura.ac.tz"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Nenosiri (Password)
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingiza nenosiri..."
                className="w-full pl-9 pr-10 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Nikumbuke kwenye kifaa hiki</span>
            </label>
          </div>

          {/* Helper hint for login */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-relaxed">
            <div className="font-semibold text-slate-700 mb-0.5">Taarifa za Kuingia (Demo):</div>
            <div>Email: <code className="text-amber-800 font-mono font-bold">admin@tura.ac.tz</code></div>
            <div>Password: <code className="text-amber-800 font-mono font-bold">Tura2026!</code></div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow hover:shadow-md disabled:opacity-50"
          >
            {loading ? 'Inathibitisha...' : 'Ingia kwenye Dashibodi'}
          </button>
        </form>
      </div>
    </div>
  );
};
