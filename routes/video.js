var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('video', {
        title: 'video'
    })
})

module.exports = router;
