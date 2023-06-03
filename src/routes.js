const router = require('express').Router()
const homeController = require('./controllers/homeController')
const catController = require('./controllers/catController');
const breedController = require('./controllers/breedController');


router.use(homeController);
router.use(catController);
router.use(breedController);

// router.get('*', (req, res) => {
//     res.redirect('/404');
// })

module.exports = router;
