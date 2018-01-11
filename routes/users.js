var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', function(req, res, next) {
  return res.status(200).
    json({
      responseCode: '00',
      responseMessage: 'Success',
    });
});

module.exports = router;
