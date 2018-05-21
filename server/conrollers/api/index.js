var router = require('express').Router();


router.use('/', require('./post'));
router.use('/', require('./users'));

module.exports = router;
