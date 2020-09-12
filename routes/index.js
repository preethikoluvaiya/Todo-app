
//access express library
const express = require('express');

//acquiring body-parser
const bodyparser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyparser.urlencoded({ extended: true })
var jsonParser = bodyparser.json()

//create router to routes to controller
const router = express.Router();
router.use(bodyparser.json())
//accessing controller 
const homeController = require('../controllers/homepage_controller');

//routing to home controller
router.get('/', homeController.home);

// routing to  addlist
router.post('/add-list', urlencodedParser, homeController.addlist); 

//routing to delete-list controller
router.get('/delete-list/',urlencodedParser, homeController.deletebyid);

//routing to view task list by category wise
router.get('/allview-list/', urlencodedParser, homeController.home);
router.get('/workview-list/', urlencodedParser, homeController.viewByWork);
router.get('/schoolview-list/', urlencodedParser, homeController.viewBySchool);
router.get('/homeview-list', urlencodedParser, homeController.viewByHome);
router.get('/shoppingview-list/', urlencodedParser, homeController.viewByShopping);

//routing to edit list
router.get('/edit-list/',urlencodedParser, homeController.renderEditPage);
// router.get('/edit-list/',urlencodedParser, homeController.editListById);

//routing to 
router.post('/update-list',urlencodedParser, homeController.updateAndSave);


//exports router to get access in index.js
module.exports = router;