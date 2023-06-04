const router = require('express').Router();
const breedManager = require('../services/breedManager')


router.get('/addCat', async (req, res) => {
    const catBreeds = await breedManager.getAll().lean();
    console.log(catBreeds);
    res.render('addCat', {'catBreeds':catBreeds} );
});


module.exports = router;
