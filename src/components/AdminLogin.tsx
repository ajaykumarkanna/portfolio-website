import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { MainNavigation } from './MainNavigation';  // Removed as per request

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'ajaykumar.jai1111@gmail.com' && password === '120012023aA*') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Admin Portal
            </h1>
            {/* <MainNavigation currentPath="/admin-login" /> */}  {/* Removed as per request */}
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
          <h2 style={{ marginBottom: '1rem' }}>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', width: '300px', display: 'block', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', width: '300px', display: 'block', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <button 
              type="submit"
              style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Login
            </button>
          </form>
          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}