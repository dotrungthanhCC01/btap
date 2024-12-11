// src/pages/CreateCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCard.css';

const CreateCard = () => {
  const [message, setMessage] = useState('');
  const [design, setDesign] = useState('');
  const navigate = useNavigate();

  const handleSaveCard = () => {
    // Lưu thông tin thiệp vào cơ sở dữ liệu hoặc localStorage
    alert('Thiệp chúc mừng Giáng Sinh đã được lưu!');
    navigate('/dashboard'); // Quay lại Dashboard sau khi tạo thiệp
  };

  return (
    <div className="create-card">
      <h1>Tạo mẫu thiệp Giáng Sinh</h1>
      <form>
        <textarea
          placeholder="Nhập lời chúc của bạn..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <label>Chọn thiết kế thiệp:</label>
          <select
            value={design}
            onChange={(e) => setDesign(e.target.value)}
          >
            <option value="">-- Chọn thiết kế --</option>
            <option value="design1">Thiết kế 1</option>
            <option value="design2">Thiết kế 2</option>
            <option value="design3">Thiết kế 3</option>
          </select>
        </div>
        <button type="button" onClick={handleSaveCard}>Lưu thiệp</button>
      </form>
    </div>
  );
};

export default CreateCard;
