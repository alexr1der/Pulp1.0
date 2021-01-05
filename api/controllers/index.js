const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const postsController = require('./posts.js');
const usersController = require('./users.js');
const appConfigController = require('./appConfig.js');
const mypageController = require('./mypage.js');
const  statesController=require('./states.js');
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/users', usersController);
router.use('/mypage', mypageController);
router.use('/states', statesController);
router.use('/application-configuration', appConfigController);


module.exports = router;