'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const Match = new Schema({
        local: {
            type:String,
            required:true
        },
        visit: {
            type:String,
            required:true
        },
        day: {
            type:String,
            required:true
        },
        month: {
            type:String,
            required:true
        },
        hour: {
            type:String,
            required:true
        },
        minutes: {
            type:String,
            required:true
        },
        group: {
            type:String,
            required:true
        },
        local_goals: {
            type:String,
            required:false,
            default: "0"
        },
        visit_goals: {
            type:String,
            required:false,
            default:"0"
        },
        is_finished:{
            type: Boolean,
            required: false,
            default : false
        }
    });

// create and export model
module.exports = mongoose.model("matchsModel", Match);

