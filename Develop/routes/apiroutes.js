const router = require("express").Router();
var fs = require("fs");
var db = require("../db/db");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        if (err) {
            return res.status(500).end();
        };
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: db[db.length - 1].id + 1
        };
        db.push(newNote);

        fs.writeFile(db, JSON.stringify(data), function(err) {
            if (err) {
                return res.status(500).end();
            }
            console.log("test");
        })
        res.json(newNote);
        res.end();
    });

    app.delete("/api/delete/:id", function(req, res) {
        db = db.filter(note => note.id !== parseInt(req.params.id))
        return res.json(db)
    });

};