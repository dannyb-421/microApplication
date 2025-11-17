## Backend
Node.js and Express application with SQLite database for managing users

backend/
├─ app.js          # defines Express app (routes + middleware)
├─ server.js       # server startup
├─ db.js           # SQLite database setup
├─ test.js         # test script using Supertest
├─ database.sqlite # sqlite database // gitignore
├─ api.log         # auto-created when API hits occur // gitignore
├─ package.json
├─ package-lock.json
├─ README.md
└─ node_modules    # gitignore

## Setup
cd backend
npm install

## Server startup
cd backend
node server.js

## Server available at:
http://localhost:4000

## Database available at:
http://localhost:4000/users

## Testing without frontend
cd backend
node test.js

## Logging
api.log