
// DEPENDENCIES =======================================
const noteData = require("./db/db.json");
const fs = require("fs");
// =================================================================^


// ROUTING GET/POST/DELETE=============================
module.exports = (app) => {
  app.get("/api/notes",  (req, res) => {
    res.json(noteData);
    console.log('read notes')
  });

  app.post("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        //variables to parse new data from JSON and set ids for new notes
        const newNote = req.body;
        console.log("req.body ", req.body)
        newNote.id = biggestId + 1;
        jsonData.push(newNote)
        //write new
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(jsonData), (err, data) => {
            if (err) throw err;
            res.json(jsonData);
        })
    })
  })

  app.delete('/api/notes/:id', (req,res) => {

  });
}
// =================================================================^