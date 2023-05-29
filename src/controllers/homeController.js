const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("in home /");
  res.render("index");
});

// router.get("/404", (req, res) => {
//     console.log('in 404');
//     res.render('404');
// });

module.exports = router;
