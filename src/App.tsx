import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import HomePage from '@/app/page';
import NotFoundPage from '@/app/not-found';
import PrivacyPage from '@/app/privacy/page';
import TermsPage from '@/app/terms/page';
import { ThemeProvider } from '@/components/theme-provider';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const target = document.getElementById(elementId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/privacy_policy.html" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/terms.html" element={<TermsPage />} />
    <Route
      path="/connect/privacy"
      element={<Navigate to="/privacy_policy.html" replace />}
    />
    <Route
      path="/connect/privacy_policy"
      element={<Navigate to="/privacy_policy.html" replace />}
    />
    <Route
      path="/connect/privacy_policy.html"
      element={<Navigate to="/privacy_policy.html" replace />}
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1 pt-20 md:pt-24">
            <ScrollManager />
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
