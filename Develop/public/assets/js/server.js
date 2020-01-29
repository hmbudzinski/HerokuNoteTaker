var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//call store constuctor here, var store = new Store
//will need to stringfy/parse 

//HTML routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/assets/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/assets/notes.html"));
});

// module.exports = router;
//solution uses router instead of app.

//API routes
//should read the file and return all saved notes as JSON, READ in CRUD
app.get("/notes", function(req, res) {
  res.readFile(path.join(__dirname, "./db/db.json"));
  // calls store.getNotes() which is a class 
  //have a file called store at db level, the file would be to define the Store class, have a constructor, have a fuction called getNotes in the class that does what file 36 does, one called add note, and one called remove note.
});

//should receive a new note and save on the request body, add it to the db.json file, then return the new note to the client, CREATE in CRUD
app.post("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../../../db.json"));

  var newPost = req.body;

  newPost.routeName = newPost.title.replace(/\s+/g, "").toLowerCase()
  //taking in information that they give you and adding it to JSON file in same format. use starwars for adding a new Jedi s

  console.log(newPost);

  notesArr.push(newPost);

  res.json(newPost);
});

//should receive a query parameter containing the id of a note to deleteThis means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file. DELETE in CRUD. need to add an ID in order to delete 
app.delete("/notes/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "../../../db.json"));
});

//shows the server is listeing
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
