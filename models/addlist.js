//require mongoose library
const mongoose = require('mongoose');


const addListSchema = new mongoose.Schema({
    description:{
        type: String,
        required : true
    },
    category:{
        type: String,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    list:{
        type:[]
    }
});



//export Model
const AddList = mongoose.model('AddList', addListSchema);
module.exports = AddList;