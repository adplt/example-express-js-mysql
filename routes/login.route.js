var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Sequelize = require('sequelize');
var isEmpty = require('lodash/isEmpty');

router.post('/', (req, res) => {
  const request = req.body;
  const Op = Sequelize.Op;
  return User.findOne({
    attributes: ['username', 'password'],
    where: {
      [Op.and]: [
        {username: request.username},
        {password: request.password},
      ]
    }
  }).then((response) => {
    if (isEmpty(response)) return res.status(400).json({responseCode: '02', responseMessage: 'No user found'});
    else return res.status(200).json({responseCode: '00', responseMessage: 'Success', response});
  });
});

module.exports = router;
