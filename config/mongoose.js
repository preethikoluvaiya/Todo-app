//require mongoose library
const mongoose = require('mongoose');

//connecting to db - connection string
mongoose.connect('mongodb://localhost/todoapp_db',{
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}); 

//acquire db connection
const db = mongoose.connection;

//if error in connection
db.on('error', console.error.bind(console,'error in connecting db'));

//on successfull connection
db.once('open', function(){
    console.log("Db connected successfully!!!");
});