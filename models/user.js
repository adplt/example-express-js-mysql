// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return User;
// };

var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nim: String,
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dateOfBirth: {type: String, required: true},
  profilePict: String,
  backgroundPic: String,
  isDelete: {type: Boolean, default: false}
}, {
  timestamps: true
});

module.exports = mongoose.model('users', userSchema);
