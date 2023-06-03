const router = require('express').Router();

router.get('/addBreed',(req, res) => {
    console.log('in addBreed');
    res.render('addBreed')
});

router.post('/addBreed', (req, res) => {
    console.log('POST catBreed');
    console.log(req.params);
});

module.exports = router;

