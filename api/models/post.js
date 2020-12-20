'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
      nameoftheplace:{type: DataTypes.STRING,
       validate: {
        notEmpty: true,
        }},
       mainpicture:{ type: DataTypes.STRING},
       gallery:{ type: DataTypes.STRING},
       description:{ type: DataTypes.STRING(1234),
         validate: {
       
        notEmpty: true,
        
        }
        },
     rateplace:{ type: DataTypes.STRING},
     street:{ type: DataTypes.STRING},
     city:{ type: DataTypes.STRING},
     state:{ type: DataTypes.STRING},
     zipcode:{ type: DataTypes.INTEGER},
     category:{ type: DataTypes.STRING},
     parking:{ type: DataTypes.STRING},
     username:{ type: DataTypes.STRING},
   
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {

  };

  return Post;
};