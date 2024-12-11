import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);  // Chạy lại khi token thay đổi

  if (!token) {
    return null;  // Không render Dashboard nếu chưa có token
  }

  return (
    <div className="dashboard">
      <h1>Chào mừng đến với trang Dashboard!</h1>
      <p>Hãy tạo mẫu thiệp chúc mừng Giáng Sinh của bạn ngay bây giờ!</p>
      <button
        onClick={() => navigate('/create-card')}  // Điều hướng đến trang tạo mẫu thiệp
      >
        Tạo mẫu thiệp Giáng Sinh
      </button>
    </div>
  );
};

export default Dashboard;
