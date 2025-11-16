// =============================
// Database: SQLite 
// =============================

// SQLite3 library with verbose mode for debug logs
const sqlite3 = require('sqlite3').verbose();

// Create and connect to SQLite database
// If the database file does not exist, it will be created
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Create 'users' table if it doesn't exist
// id: auto-incremented primary key
// name: text field for user name
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`, 
    
    // error handling
    (err) => {
        if (err) {
            console.error('Could not create users table', err);
        } 
        else {
            console.log("=============================================");
            console.log('Users table is ready');
            console.log("=============================================");
        }
    });
});

module.exports = db;