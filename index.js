// acquiring express lib
const express = require('express');

//creating variable to use express
const app = express();

//assigning port
const port = 8000;

//connecting to server
app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting to server: ${err}`);
    }
    console.log(`Sucessfully running on port: ${port}`);
})