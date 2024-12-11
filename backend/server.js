const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Thêm CORS để xử lý các yêu cầu từ frontend
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Sử dụng middleware để phân tích cú pháp JSON
app.use(express.json());

// Cấu hình CORS để chỉ cho phép frontend kết nối từ cổng 3000 (React)
const corsOptions = {
  origin: 'http://localhost:3000', // URL của frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Nếu cần gửi cookie hoặc thông tin xác thực
};
app.use(cors(corsOptions));

// Định tuyến API
app.use('/api/auth', authRoutes);

// Cấu hình cổng
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
