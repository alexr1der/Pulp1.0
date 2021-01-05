const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

//const upload = multer({ storage: storage }).single('mainpicture');

/*
router.post('/',  passport.isAuthenticated(), function (req, res) {
    upload(req, res, function (err) {
        if (err) {
        
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

    })
});
*/
// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

/*
router.get('/', (req,res) => {
  let {city1}=req.query;
  city1 = ['Park', 'Waterfall'].includes(city1) ? city1 : undefined;
  if (city1===undefined){
    Post.findAll({})
    .then(posts => res.json(posts));

  } else {
  Post.findAll({where: {category:city1}})
    .then(posts => res.json(posts));}

});======================================================
router.get('/', (req,res) => {

  User.findAll({})
    .then(users => res.json(users));

});*/
router.get('/', (req,res) => {
  let {name}=req.query;
  name = [{name}].includes(name) ? userName : undefined;
  if (name===undefined){
    User.findAll({})
    .then(users => res.json(users));

  } else {
  User.findAll({where: {userName:name}})
    .then(users => res.json(users));}

});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(users => {
      if(!users) {
        return res.sendStatus(404);
      }

      res.json(users);
    });
});

router.get('/mypage', (req, res) => {

let s=String(req.user.email);
  User.findAll({where: {email:s}})
    .then(users => {
      if(!users) {
        return res.sendStatus(404);
      }

      res.json(users);
    });
});





module.exports = router;