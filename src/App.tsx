/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventInfoCards } from './components/EventInfoCards';
import { AboutGraduation } from './components/AboutGraduation';
import { GraduationMessage } from './components/GraduationMessage';
import { ThankYouSection } from './components/ThankYouSection';
import { UniformsSection } from './components/UniformsSection';
import { GallerySection } from './components/GallerySection';
import { GraduatesSection } from './components/GraduatesSection';
import { SchoolLifeSection } from './components/SchoolLifeSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ShareSection } from './components/ShareSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminDashboard } from './components/AdminDashboard';

import { GalleryImage, GalleryCategory } from './types/gallery';
import { getStoredImages, checkAdminSession, clearAdminSession } from './lib/storage';

export default function App() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('ZOTE');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);

  // Load stored images and admin session on mount
  const refreshImages = useCallback(() => {
    const loaded = getStoredImages();
    setImages(loaded);
  }, []);

  useEffect(() => {
    refreshImages();
    setIsAdminLoggedIn(checkAdminSession());

    const handleStorageUpdate = () => {
      refreshImages();
    };

    window.addEventListener('tura-gallery-updated', handleStorageUpdate);
    return () => window.removeEventListener('tura-gallery-updated', handleStorageUpdate);
  }, [refreshImages]);

  // Handle Admin Button Click
  const handleOpenAdmin = () => {
    if (isAdminLoggedIn) {
      setIsAdminDashboardOpen(true);
    } else {
      setIsAdminModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setIsAdminModalOpen(false);
    setIsAdminDashboardOpen(true);
  };

  const handleLogout = () => {
    clearAdminSession();
    setIsAdminLoggedIn(false);
    setIsAdminDashboardOpen(false);
  };

  // Scroll Helpers
  const scrollToGallery = (category?: GalleryCategory) => {
    if (category) {
      setSelectedCategory(category);
    }
    const el = document.getElementById('picha');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('kuhusu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToGallery={() => scrollToGallery()}
          onScrollToAbout={scrollToAbout}
        />

        {/* 2. Key Event Information Cards */}
        <EventInfoCards />

        {/* 3. About Graduation */}
        <AboutGraduation />

        {/* 4. Strict Uniform Guide (Form I-IV O-Level vs Form V-VI A-Level) */}
        <UniformsSection
          onFilterCategory={(cat) => scrollToGallery(cat as GalleryCategory)}
        />

        {/* 5. Main Photo Gallery with Search, Filters, and Lightbox */}
        <GallerySection
          images={images}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenUpload={handleOpenAdmin}
          isAdminLoggedIn={isAdminLoggedIn}
        />

        {/* 6. Form Four Graduates 2026 Tribute */}
        <GraduatesSection
          onViewGraduatesPhotos={() => scrollToGallery('WAHITIMU')}
        />

        {/* 7. Graduation Message to Graduates */}
        <GraduationMessage />

        {/* 8. School Life Overview */}
        <SchoolLifeSection />

        {/* 9. Graduation Timetable (Ratiba) */}
        <ScheduleSection />

        {/* 10. Thank You Section */}
        <ThankYouSection />

        {/* 11. Social Sharing Section */}
        <ShareSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Official Location & Contact Info */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Admin Dashboard */}
      {isAdminDashboardOpen && (
        <AdminDashboard
          images={images}
          onRefreshImages={refreshImages}
          onClose={() => setIsAdminDashboardOpen(false)}
          onLogout={handleLogout}
          onViewWebsite={() => setIsAdminDashboardOpen(false)}
        />
      )}
    </div>
  );
}
