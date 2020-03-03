var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// IMPORT ROUTES FILES
require("./routes/apiroutes")(app);
require("./routes/htmlRoutes")(app);

// Server Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});