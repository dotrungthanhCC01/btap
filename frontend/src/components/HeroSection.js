import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleButtonClick = () => {
    alert('Vui lòng đăng nhập hoặc đăng ký để sử dụng tính năng này.');
  };

  return (
    <section className="hero-section">
      <div className="hero-content" >
        <h1 className="hero-title">Thiết Kế Thiệp Giáng Sinh Đẹp Online</h1>
        <p className="hero-description">Bắt đầu tạo thiệp Giáng Sinh ngay bây giờ và gửi những lời chúc tốt đẹp nhất tới người thân yêu!</p>
        <button className="btn hero-btn" onClick={handleButtonClick}>Bắt đầu tạo thiệp Giáng sinh</button>
      </div>
      <div className="hero-image">
        <img src="https://static-cse.canva.com/blob/1812579/1600w-fiFKHa3hsUA.jpg" alt="ảnh mô tả"/>
      </div>
    </section>
  );
};

export default HeroSection;
