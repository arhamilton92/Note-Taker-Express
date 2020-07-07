
// DEPENDENCIES =======================================
const noteData = require("../db/db.json");
const fs = require("fs");
// =================================================================^


// ROUTING GET/POST/DELETE=============================
module.exports = (app) => {
  app.get("/api/notes",  (req, res) => {
    res.json(noteData);
    console.log('read notes')
  });

  app.post("/api/notes", (req, res) => {
    // -- req.body hosts is equal to the JSON post sent from the user
    let note = req.body;
    console.log(note);
    noteData.push(note);
    res.json(true);

    fs.writeFile("/../db/db.json", JSON.stringify(noteData), "utf8", (err) => {
          if (err) {
              return res.send("No data");
          }
          res.json(noteData);
          console.log('added note')
    });
  });

  app.delete('/api/notes/:id', (req,res) => {
  });
}
// =================================================================^