// App.js
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Themes from './components/Themes';
import { Toaster } from 'react-hot-toast';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import PrivateRoute from './components/PrivateRoute';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Admin onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;