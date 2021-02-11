const router = require("express").Router();

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
  console.log('hello')
});

module.exports = router;
