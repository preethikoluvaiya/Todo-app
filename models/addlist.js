//require mongoose library
const mongoose = require('mongoose');

//create schema
const addList = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    category:{
        type: String,
        required : true
    },
    date:{
        type : Date,
        default: Date.now,
        required : true
    }
});

//export Model
const AddList = mongoose.model('AddList', addList);
module.exports = AddList;