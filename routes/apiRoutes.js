
// DEPENDENCIES =======================================
const noteData = require("../db/db.json");
// =================================================================^


// ROUTING GET/POST/DELETE=============================
module.exports = (app) => {
  app.get("/api/notes",  (req, res) => {
    res.json(noteData);
  });
  app.post("/api/notes", (req, res) => {
  });
  app.delete('/api/notes/:id', (req,res) => {
  });
}
// =================================================================^