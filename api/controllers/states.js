const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Post } = db;




router.get('/', (req, res) => {
  let s=String(req.user.email);
  Post.findAll({ attributes: ['state']},{where:{email:s}})
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});





module.exports = router;