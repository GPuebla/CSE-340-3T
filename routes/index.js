const express = require('express');
const router = express.Router();

const contact = require('./contact');

router.use('/contacts', contact);


module.exports = router;