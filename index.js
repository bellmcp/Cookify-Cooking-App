var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var path = require("path");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(port);
