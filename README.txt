# microApplication
This is a Node.js and Express application with a SQLite database for storing users. 
The backend exposes simple GET and POST APIs and logs requests to a file.


backend/
├─ app.js          # defines Express app (routes + middleware)
├─ server.js       # starts the server
├─ db.js           # SQLite database setup
├─ test.js         # simple test script using Supertest
├─ database.sqlite # sqlite database // gitignore
├─ api.log         # auto-created when API hits occur // gitignore
├─ package.json
├─ package-lock.json
└─ node_modules    # gitignore

## Cloning repository
git clone git@github.com:dannyb-421/microApplication.git

## Install dependencies
cd backend
npm install

## Start server:
cd backend
node server.js

## When connecting for first time
database.sqlite will be added to users local repositiory

## Server will be available at:
http://localhost:4000


## Testing available by running test.js in seperate terminal
cd backend
node test.js

## Testing script will:
add a TESTUser instance to the database
print before and after of database to console



