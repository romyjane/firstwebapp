const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Have a great Day!!!");
  res.write("Welcome to my affordable Hair and Make up.");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});