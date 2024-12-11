const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Đăng ký người dùng
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Kiểm tra thông tin yêu cầu
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Vui lòng cung cấp đủ thông tin.' });
  }

  try {
    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await User.login(email); // Sử dụng phương thức login để kiểm tra email
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã tồn tại, vui lòng chọn email khác.' });
    }

    // Đăng ký người dùng mới
    const result = await User.register(name, email, password);
    res.status(201).json({ message: 'Đăng ký thành công', userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra, vui lòng thử lại' });
  }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Kiểm tra thông tin yêu cầu
  if (!email || !password) {
    return res.status(400).json({ message: 'Vui lòng cung cấp đủ thông tin.' });
  }

  try {
    // Kiểm tra thông tin đăng nhập
    const user = await User.login(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Thông tin đăng nhập không chính xác.' });
    }

    // Tạo JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Đăng nhập thành công', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra, vui lòng thử lại' });
  }
};
