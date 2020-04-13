// Require packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Creating an instance of express inside a variable
const app = express();

// Assigning a heroku port to use or local host 3000
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

// Middleware set-up
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Setting the root directory to the public folder
app.use(express.static("public"));

// Connecting to the MongoDB or localDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Setting up routes to use (api & html)
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Listening on assigned port
app.listen(PORT, function () {
    console.log(`Your app is listening on port ${PORT}`);
});