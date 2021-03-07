const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "Enter a workout name"
    },
    type: {
        type: String,
        trim: true,
        unique: true,
        required: "Enter a type of workout"
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number
    },
    Distance: {
        type: Number
    }
});
