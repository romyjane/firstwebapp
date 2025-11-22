const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  res.write("Romy Jane C. Manili\n");
  res.write("BA 4102\n\n");
  
  res.write("Small steps everyday\n")
  res.end();

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});