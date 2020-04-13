const app = require("express").Router();
const workout = require("../models/workout");

// api GET route for workouts
app.get("/api/workouts", function (req, res) {
    workout 
    .find({})
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log("An error has occurred"),
        err
    });
});

// api GET route for stats on the dashboard
app.get("/api/workouts/stats", function(req, res) {
    workout
    .find({})
    .then(function(data) {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});
module.exports = app;