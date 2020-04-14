const app = require("express").Router();
const workout = require("../models/workout");

// api GET route for workouts
app.get("/api/workouts", function (req, res) {
  workout
    .find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log("An error has occurred"), err;
    });
});

// api GET route for stats on the dashboard
app.get("/api/workouts/stats", function (req, res) {
  workout
    .find({})
    .then(function (data) {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// api POST route for new workout
app.post("/api/workouts", function ({ body }, res) {
  console.log("adding a new workout for you!");
  workout
    .create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// api GET route for the stats page
app.get("/api/workouts/range", (req, res) => {
    workout
    .find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// api PUT route for getting workout by id
app.put("/api/workouts/:id", function (req, res) {
    workout
    .findByIdAndUpdate(
        {_id: req.params.id},
        {$push: { exercises: req.body } },
        {new: true}
    )
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
});
module.exports = app;
