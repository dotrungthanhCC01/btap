const db = require('../configs/db');

const User = {
  // Đăng ký người dùng mới
  async register(name, email, password) {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(query, [name, email, password], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  // Kiểm tra email tồn tại
  async login(email, password = null) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        if (results.length === 0) return resolve(null);

        const user = results[0];
        if (password && user.password !== password) return resolve(null); // Kiểm tra mật khẩu nếu có
        resolve(user);
      });
    });
  },
};

module.exports = User;
