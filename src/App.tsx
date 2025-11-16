import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
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
            <AdminPanel onClose={() => navigate('/')} onPreview={() => navigate('/')} />
          </PrivateRoute>
        }
      />
      <Route path="/preview_page.html" element={<Resume onNavigateToPortfolio={() => navigate('/portfolio')} />} />
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