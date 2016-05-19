var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/bulkingtothemax', function(req, res) {
  res.send('Path: /bulkingtothemax');
};

router.get('/cutting', function(req, res) {
  res.send('Path: /cutting');
};

router.get('/soyolked', function(req, res) {
  res.send('Path: /soyolked');
};

module.exports = router;
