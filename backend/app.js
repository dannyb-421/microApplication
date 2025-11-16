// =============================
// Node.js + Express Application
// =============================

const express = require('express'); // Express framework for building the API
const cors = require('cors'); // CORS middleware for handling cross-origin requests
const db = require('./db'); // Import the database setup
const fs = require('fs'); // File system module for logging

//initialization
const app = express();
app.use(cors());
app.use(express.json());

// logging for each API request
app.use((req, res, next) => {
  fs.appendFileSync('api.log', `${Date.now()} | ${req.method} ${req.url}\n`);
  next();
});

// =============================
// API Endpoints
// =============================

// Root -> indicate server is running
app.get('/', (req, res) => res.send('Backend running'));

// GET /users -> return all users
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => res.json(rows));
});

// POST /users -> Adds a new user to the database
app.post('/users', (req, res) => {
  const { name } = req.body;
  db.run('INSERT INTO users(name) VALUES(?)', [name], function() {
    res.json({ id: this.lastID, name });
  });
});


module.exports = app;
