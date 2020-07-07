
// DEPENDENCIES =======================================
const noteData = require("./db/db.json");
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
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(noteData), (err, data) => {
            if (err) throw err;
            res.json(noteData);
        })
  })

  app.delete('/api/notes/:id', (req,res) => {

  });
}
// =================================================================^