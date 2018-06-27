var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'contacts'
    })
})

module.exports = router;
