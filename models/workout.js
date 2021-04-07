const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    name: {
      type: String,
      trim: true,
      required: "Workout/exercise name?"
    },
    type: {
      type: String,
      trim: true,
      required: "Workout/exercise type?"
    },
    duration: {
      type: Number,
      trim: true,
      require: "How long did this workout/exercise take?"
    }, 
    weight: {
        type: Number,
        trim: true
    }, 
    sets: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    distance: {
      type: Number,
      trim: true
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;