const express = require('express');
const router = express.Router();

const contact = require('./contact');

router.get('/', (req,res) => {
    res.send('Hello World!')
});

router.use('/contacts', contact);


module.exports = router;