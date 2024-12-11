import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import LoginSignupForm from './components/LoginSignupForm';
import Dashboard from './pages/Dashboard'; 
import CreateCard from './pages/CreateCard';  
import TrangChu from './pages/TrangChu';  // Thêm trang TrangChu
import Mau from './pages/Mau';            // Thêm trang Mau
import Donate from './pages/Donate';      // Thêm trang Donate
import LienHe from './pages/LienHe';      // Thêm trang LienHe
import './styles.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('login');
  const [user, setUser] = useState(null);  // Lưu thông tin người dùng trong state

  const openLoginForm = () => {
    setFormType('login');
    setIsModalOpen(true);
  };

  const openSignupForm = () => {
    setFormType('signup');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Xóa token khi đăng xuất
    setUser(null);  // Đặt lại user về null khi đăng xuất
    alert('Bạn đã đăng xuất');
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} openLoginForm={openLoginForm} openSignupForm={openSignupForm} handleLogout={handleLogout} />
        <HeroSection />
        <Features />

        {/* Form Modal */}
        {isModalOpen && (
          <LoginSignupForm type={formType} closeModal={closeModal} setUser={setUser} />
        )}

        <Routes>
          <Route path="/" element={<TrangChu />} />      {/* Trang chủ */}
          <Route path="/TrangChu" element={<TrangChu />} /> {/* Trang chủ */}
          <Route path="/Mau" element={<Mau />} />         {/* Một số mẫu nổi bật */}
          <Route path="/Donate" element={<Donate />} />   {/* Ủng hộ tôi */}
          <Route path="/LienHe" element={<LienHe />} />   {/* Liên hệ */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-card" element={<CreateCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
