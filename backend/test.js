// =============================
// Testing Script for Backend Endpoints
// Gets users, adds a test user, and gets users again
// =============================

const request = require('supertest'); // Supertest for HTTP assertions
const app = require('./app'); // Import the Express app

(async () => {
  // GET /users
  const res1 = await request(app).get('/users');
  console.log("=============================================");
  console.log("Testing Backend Endpoints");
  console.log("=============================================");
  
  console.log('GET /users =>', res1.body);

  // POST /users
  const userName = "TESTUser_" + Date.now();
  const res2 = await request(app).post('/users').send({ name: userName });
  console.log('POST /users =>', res2.body);

  // GET /users again to verify
  const res3 = await request(app).get('/users');
  console.log('GET /users after POST =>', res3.body);
  console.log("=============================================");
})();