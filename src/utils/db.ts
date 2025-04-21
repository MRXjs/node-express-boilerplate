import 'dotenv/config';
import mysql from 'mysql2/promise'; // Use promise-based connection

export const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10, // Limits simultaneous connections
    queueLimit: 0,
});
