const router = require('express').Router();

router.get('/addCat',(req, res) => {
    console.log('in addCat');
    res.render('addCat')
});


module.exports = router;
