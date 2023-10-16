const http = require("http");
const PORT = 3000;
//create server its taking two arguments

const server = http.createServer((request, response) => {
  /**
   * request.method
   * request.url
   */
  if (req.url == "/home") {
    response.end("welcome to home page");
  }
  response.end("subhransu");
});

server.listen(PORT, () => {
  console.log("server is starting on " + PORT);
});
