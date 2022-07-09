import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

const ImpressumPage = lazy(() => import('../pages/ImpressumPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage status={404} message="Page not found." />} />
      </Routes>
    </Suspense>
  );
}
