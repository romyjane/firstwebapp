const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  res.write("==GLAM AND GLOW Studio==\n");
  res.write("Your Trusted hair and make up services.");
  res.end();
  
  res.write("Welcome to my affordable Hair and Makeup services.\n")
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});