const express = require('express');

//acquiring model
const AddList = require("../models/addlist");



//controller for home
module.exports.home = function(req,res){
    AddList.find({},function(err, tasklist){
        tasklist.sort(function (a, b) {
            var a = a.date;
            var match = /(\d+)\/(\d+)\/(\d+)/.exec(a)
            var key1 = new Date(match[3], match[2], match[1]);
            var b = b.date;
            var match = /(\d+)\/(\d+)\/(\d+)/.exec(b)
            var key2 = new Date(match[3], match[2], match[1]);
            if (key1 < key2) {
                return -1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return 1;
            }
        })
        
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('homepage',{
            task_list : tasklist
        });
    });
}
//controller to add task list
module.exports.addlist = function(req,res){
    AddList.create({
        description : req.body.description,
        category : req.body.category,
        date:req.body.date,
        list:req.body.list
    },function(err, newList){
        if(err){
            console.log('Error in creating contact');
            return;
        }
       return res.redirect('back');
    });
}

// controller for delete list by id
module.exports.deletebyid =  function(req,res){
    let id = req.query.id;
    // console.log("id is: ", id);
    AddList.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting data");
        }
        return res.redirect('back');
    });
}
// controller to view the task details by work
module.exports.viewByWork = function(req,res){
    AddList.find({category:"Work"},function(err, tasklist){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('homepage',{
            task_list : tasklist
        });
    });
}
//controller to view the task details by School
module.exports.viewBySchool = function(req,res){
    AddList.find({category:"School"},function(err, tasklist){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('homepage',{
            task_list : tasklist
        });
    }); 
}
//controller to view the task details by Home
module.exports.viewByHome = function(req,res){
    AddList.find({category:"Home"},function(err, tasklist){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('homepage',{
            task_list : tasklist
        });
    });
}
//controller to view the task details by shopping
module.exports.viewByShopping = function(req,res){
    AddList.find({category:"Shopping"},function(err, tasklist){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('homepage',{
            task_list : tasklist
        });
    });
}

//controller to edit list by id
module.exports.renderEditPage = function(req,res){
    let id = req.query.id;
    AddList.findById(id,function(err,tasklist){

        if(err){
            console.log('error in fetching data from db');
            return;
        } 
        res.render('edit.ejs',{
            task_list_id : tasklist.id,
            task_list_Description :tasklist.description,
            task_list_Category :tasklist.category,
            task_list_Date :tasklist.date,
            task_list_list :tasklist.list
        });
    });
        
}

//controller for update by id
module.exports.updateAndSave =function(req,res){
    let id = req.body.id;
    let item = req.body.list;
    if(item === null || item === undefined){
        item = '';
    }
    
    var cursor = { 
        description : req.body.description,  
        category : req.body.category, 
        date: req.body.date,
        list : item
     };
   
    AddList.findByIdAndUpdate(id, cursor ,function(err, cursor){
        if(err){
            console.log('Error in updating contact');
            return;
        }
        
       return res.redirect('/');
    });

}