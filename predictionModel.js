'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const Prediction = new Schema({
        matchId: {
            type:String,
            required:true
        },
        userId: {
            type:String,
            required:true
        },
        local_goals: {
            type:String,
            required:true
        },
        visit_goals: {
            type:String,
            required:true
        },
        isLocalGoalsGuessed:{
            type: Boolean,
            required: false,
            default : false
        },
        isVisitGoalsGuessed:{
            type: Boolean,
            required: false,
            default : false
        },
        totalPoints:{
            type: String,
            required: false,
            default : "0"
        },
        isFinished:{
            type: Boolean,
            required: false,
            default : false
        },
    });

// create and export model
module.exports = mongoose.model("predictionModel", Prediction);

