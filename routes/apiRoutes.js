
// DEPENDENCIES =======================================
const noteData = require("../db/db.json");
const fs = require("fs");
let newId = 1;


// =================================================================^


// ROUTING GET/POST/DELETE=============================
module.exports = (app) => {
  app.get("/api/notes",  (req, res) => {
    res.json(noteData);
    console.log('read notes')
  });

  app.post("/api/notes", (req, res) => {
        //variables to parse new data from JSON and set ids for new notes
        const newNote = req.body;
        
        for (i = 0; i < noteData.length; i++) {
          newId++;
        }
        newNote.id = newId
        console.log("req.body ", req.body)
        noteData.push(newNote)
        //write new
        fs.writeFile("./db/db.json", JSON.stringify(noteData), (err, data) => {
            if (err) throw err;
            res.json(noteData);
        })
        console.log(__dirname)
  })

  app.delete("/api/notes/:id", function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, notes) => {
      console.log('deleting...')
      if (err) {
        throw err
      }
      
      const newData = noteData.filter((object) => object.id != parseInt(req.params.id));
      console.log(newData);
      fs.writeFile("./db/db.json", JSON.stringify(newData), "utf8", (err) => {
        if (err) {
          throw error;
        }
        res.json(newData);
      });
    });
  });
}
// =================================================================^