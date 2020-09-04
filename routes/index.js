
//access express library
const express = require('express');

//create router to routes to controller
const router = express.Router();

const homeController = require('../controllers/homepage_controller');

//acessing contollers
router.get('/',homeController.home);



//exports router to get access in index.js
module.exports = router;