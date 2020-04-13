// html routes
var path = require("path");
const app = require("express").Router();

// html route for homepage "/"
app.get("/", (req, res) => {
    console.log("getting homepage");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

//html route for exercise "/exercise"
app.get("/exercise", (req, res) => {
    console.log("getting your exercises");
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

// html route for stats "/stats"
app.get("/stats", (req, res) => {
    console.log("getting your stats");
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

module.exports = app;