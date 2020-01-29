var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//HTML routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

//shows the server is listeing
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });