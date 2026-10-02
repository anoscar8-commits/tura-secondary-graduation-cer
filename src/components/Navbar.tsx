import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Camera, Calendar, Users, School, MapPin, GraduationCap, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, isAdminLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mwanzo', href: '#mwanzo', icon: null },
    { name: 'Kuhusu Mahafali', href: '#kuhusu', icon: null },
    { name: 'Picha', href: '#picha', icon: Camera },
    { name: 'Ratiba', href: '#ratiba', icon: Calendar },
    { name: 'Wahitimu', href: '#wahitimu', icon: GraduationCap },
    { name: 'Shule', href: '#shule', icon: School },
    { name: 'Mawasiliano', href: '#mawasiliano', icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#mwanzo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 flex items-center justify-center border border-amber-400/40 shadow-md group-hover:border-amber-400 transition-colors">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="block text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                TURA SECONDARY SCHOOL
              </span>
              <span className="block text-[11px] text-amber-300/90 font-medium tracking-wider uppercase">
                Mahafali ya Kidato cha Nne · 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Menyu Kuu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-amber-300 transition-colors rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Admin Access & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isAdminLoggedIn
                  ? 'bg-emerald-600/90 text-white hover:bg-emerald-500 border border-emerald-400/40'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
              }`}
              title={isAdminLoggedIn ? 'Dashibodi ya Admin' : 'Ingia kama Msimamizi'}
            >
              <Shield className={`w-3.5 h-3.5 ${isAdminLoggedIn ? 'text-amber-300' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">
                {isAdminLoggedIn ? 'Dashibodi ya Admin' : 'Admin'}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={mobileMenuOpen ? 'Funga menyu' : 'Fungua menyu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
              >
                <span>{link.name}</span>
                {link.icon && <link.icon className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>{isAdminLoggedIn ? 'Fungua Dashibodi ya Admin' : 'Kuingia kwa Msimamizi (Admin)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
