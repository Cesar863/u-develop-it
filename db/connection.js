const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MYSQL username,
    user: 'root',
    // Your sql password
    password: 'Root101!',
    database: 'election'
},
console.log('Connected to the election databse.')
);

module.exports = db;