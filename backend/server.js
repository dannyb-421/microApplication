// =============================
// Server Initialization
// =============================

const app = require('./app');

const PORT = 4000;

app.listen(PORT, () => {
  console.log("=============================================");
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("=============================================");
});