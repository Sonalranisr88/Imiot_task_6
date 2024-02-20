var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/signin", function (req, res) {
  res.render("signin");
});
app.listen(3000, function () {
  console.log("The server has started.");
});
