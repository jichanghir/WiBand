var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('blog', {
        title: 'blog'
    })
})

module.exports = router;
