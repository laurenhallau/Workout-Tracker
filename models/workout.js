const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an excerise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter a name"
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },
            }
        ]
    },
    {
        // this includes any virtual properties when the data is requested
        toJSON:{
            virtuals:true
        }
    }
);

// Adding a dynmaically-created property to the schema
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
