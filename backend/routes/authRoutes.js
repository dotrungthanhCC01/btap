const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
