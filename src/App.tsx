import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import AdminPanel from './components/AdminPanel';

function AppContent() {
  const [showAdmin, setShowAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Secret admin access: Press Ctrl+Shift+A
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdmin(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Close admin panel when navigating
  useEffect(() => {
    if (showAdmin) {
      setShowAdmin(false);
    }
  }, [location.pathname]);

  if (showAdmin) {
    return (
      <AdminPanel 
        onClose={() => setShowAdmin(false)}
        onPreview={() => setShowAdmin(false)}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Resume onNavigateToPortfolio={() => navigate('/portfolio')} />} />
      <Route path="/portfolio" element={<Portfolio onNavigateToResume={() => navigate('/')} />} />
      <Route path="/preview_page.html" element={<Resume onNavigateToPortfolio={() => navigate('/portfolio')} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}