const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Post } = db;
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage }).single('mainpicture');

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


router.get('/', (req,res) => {
  let {city1}=req.query;
  city1 = ['Park', 'Waterfall'].includes(city1) ? city1 : undefined;
  if (city1===undefined){
    Post.findAll({})
    .then(posts => res.json(posts));

  } else {
  Post.findAll({where: {category:city1}})
    .then(posts => res.json(posts));}

});/*
router.get('/city', (req,res) => {
  const {c} = req.params
  Post.findAll({ where: { city: c }})
    .then(posts => res.json(posts));

});

*/
router.post('/',
  passport.isAuthenticated(),
  upload,
  (req, res) => {
    let { nameoftheplace, description, rateplace, street, city, state, zipcode, category, parking } = req.body;
   
    Post.create({ nameoftheplace, mainpicture:"/"+req.file.path, description, rateplace, street, city, state, zipcode, category, parking, username:String(req.user.email)})
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);




router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

router.get('/states', (req, res) => {
  const { email } = req.user.email;
  Post.findAll({ attributes: [zipcode], where: {email:email}})
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.content = req.body.content;// I would specify it here fo ecah insid emethod
        post.save()
          .then(post => {
            res.json(post);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);


router.delete('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;