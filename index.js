// acquiring express lib
const express = require('express');

//acquiring body-parser
const bodyparser = require('body-parser');

const path = require('path');

//assigning port
const port = 8000;

//accessing db
const db = require('./config/mongoose');

//accessing model
const AddList = require('./models/addlist');

//creating variable to use express
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

//acessing router
app.use('/', require('./routes/index'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');



//access static folders
app.use(express.static('assets'));


//connecting to server
app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting to server: ${err}`);
    }
    console.log(`Sucessfully running on port: ${port}`);
})
