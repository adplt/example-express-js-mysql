var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', function(req, res, next) {
  const request = req.body;
  return User.findOne({
    nim: request.nim,
  }).exec((err, response) => {
    if (err) throw err;
    else return res.status(200).
      json({
        responseCode: '00',
        responseMessage: 'Success',
        response,
      });
  });
});

router.post('/create', function(req, res, next) {
  const request = req.body;
  const newUser = new User();
  newUser.nim = request.nim;
  newUser.email = request.email;
  newUser.password = request.password;
  newUser.firstName = request.firstName;
  newUser.lastName = request.lastName;
  newUser.dateOfBirth = request.dateOfBirth;
  newUser.profilePict = request.profilePict;
  newUser.backgroundPic = request.backgroundPic;
  newUser.isDelete = request.isDelete;
  return newUser.save((err, response) => {
    if (err) throw err;
    else return res.status(200).
      json({
        responseCode: '00',
        responseMessage: 'Success',
        response,
      });
  });
});

module.exports = router;
