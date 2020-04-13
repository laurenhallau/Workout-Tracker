const app = require("express").Router();
const workout = require("../models/workout");

// api GET route for workouts
app.get("/api/workouts", function (req, res) {
    console.log("is this working?!");
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
module.exports = app;