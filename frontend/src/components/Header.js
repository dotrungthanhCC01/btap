import React from 'react';
import { Link } from 'react-router-dom';  // Thêm Link để điều hướng
import './Header.css';

const Header = ({ user, openLoginForm, openSignupForm, handleLogout }) => {
  const handleNavigationClick = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Bạn cần đăng nhập hoặc đăng ký để sử dụng tính năng này.');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Merry Christmas!</div>
        <nav>
          <ul>
            <li><Link to="/TrangChu" onClick={handleNavigationClick}>Trang chủ</Link></li>
            <li><Link to="/Mau" onClick={handleNavigationClick}>Một số mẫu nổi bật</Link></li>
            <li><Link to="/Donate" onClick={handleNavigationClick}>Ủng hộ tôi</Link></li>
            <li><Link to="/LienHe" onClick={handleNavigationClick}>Liên hệ</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          {user ? (
            <>
              <div className="user-info">
                <img 
                  src={user.avatar || 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'}
                  alt="Avatar"
                  className="avatar"
                  style={{ width: '70px', height: '70px', borderRadius: '50%' }}
                />
                <div className="user-details">
                  <span className="user-name">{user?.name || 'Người dùng chưa có tên'}</span>
                  <span className="user-email">{user?.email || 'Email chưa có'}</span>
                </div>
              </div>
              <button className="btn logout-btn" onClick={handleLogout}>Đăng xuất</button>
            </>
          ) : (
            <>
              <button className="btn" onClick={openLoginForm}>Đăng nhập</button>
              <button className="btn signup-btn" onClick={openSignupForm}>Đăng ký</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
