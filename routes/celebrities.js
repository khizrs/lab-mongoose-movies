const router = require("express").Router();
const { routes } = require("../app");
const Celebs = require('../models/celebrity');


/* GET home page */
router.get("/celebrities", (req, res) => { 
  Celebs.find().then(Celebslist => { 
    res.render('../views/celebrities/index', { Celebslist })
  }).catch(err =>  console.log(err))
})
;



router.get("/celebrities/new", (req, res) => { 
  res.render('../views/celebrities/new')
});

router.get('/celebrities/:id', (req,res) => {

  Celebs.findById(req.params.id).then( Celebrity => { 
    res.render('../views/celebrities/show', { Celebrity })
  })
})
;

router.post("/celebrities", (req,res)=> {
  const {name,occupation,catchPhrase} = req.body
  Celebs.create({name,occupation,catchPhrase})
  .then(Celebrity => {
    res.redirect("/celebrities/" + Celebrity.id)
  }).catch(error => res.redirect("/celebrities/new" , {err}))


})

router.post("/celebrities/:id/delete", (req,res)=> {
  const {name,occupation,catchPhrase} = req.body
  Celebs.findByIdAndRemove(req.params.id)
  .then(Celebrity => {
    res.redirect("/celebrities/")
  }).catch(error => res.redirect("/celebrities/new" , {err}))


})




module.exports = router;
