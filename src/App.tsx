import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import PreviewPage from './components/PreviewPage';
import { useEffect } from 'react';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Resume onNavigateToPortfolio={() => navigate('/portfolio')} />} />
      <Route path="/portfolio" element={<Portfolio onNavigateToResume={() => navigate('/')} />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminPanel onClose={() => navigate('/')} onPreview={() => navigate('/preview')} />
          </PrivateRoute>
        }
      />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  );
}

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}