const router = require('express').Router();
const breedManager = require('../services/breedManager');

router.get('/addBreed',(req, res) => {
    console.log('in addBreed');
    res.render('addBreed')
});

router.post('/addBreed', async (req, res) => {
    console.log('POST catBreed');
    const { breed }  = req.body;

    await breedManager.create({ breed }).then(res.redirect('/')).catch((err) => console.log(err.message))
    
});

module.exports = router;

