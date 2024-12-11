const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Mặc định trong XAMPP
  password: '', // Mật khẩu của MySQL, nếu có
  database: 'my_database',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database .');
});

module.exports = db;
