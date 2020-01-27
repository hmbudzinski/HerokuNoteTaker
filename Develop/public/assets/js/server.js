var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

//API routes
//should read the file and return all saved notes as JSON, READ in CRUD
app.get("/api/notes", function(req, res) {
  res.readFile(path.join(__dirname, "../../../db.json"));
  //code to perform particular action to access GET variable use requests
});

//should receive a nw note and save on the request body, add it to the db.json file, then retur the new note to the client, CREATE in CRUD
app.post("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../../../db.json"));
  //create object?
});

//should receive a query parameter containing the id of a note to deleteThis means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file. DELETE in CRUD
app.delete("/api/notes/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "../../../db.json"));
});

//shows the server is listeing
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });