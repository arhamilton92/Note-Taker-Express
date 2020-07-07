// DEPENDENCIES =======================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
// =================================================================^


//EXPRESS =============================================
const app = express();
let PORT = process.env.PORT || 8000;
// // Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// =================================================================^


//ROUTER ==============================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// =================================================================^


//LISTENER ============================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
// =================================================================^
