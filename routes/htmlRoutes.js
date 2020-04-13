// html routes
var path = require("path");
const app = require("express").Router();

// html route for homepage /
app.get("/", (req, res) => {
    console.log("getting homepage");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

module.exports = app;