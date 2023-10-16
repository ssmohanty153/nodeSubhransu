const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", function get(req, res) {
  res.send("HEllo world");
});

app.patch("/home", (req, res) => {
  res.json({
    message: "subhransu",
    success: true,
  });
});
app.listen(PORT, function process() {
  console.log("server is starting at " + PORT);
});
