const router = require("express").Router();
const { routes } = require("../app");
const Movies = require('../models/movie');
const Celebs = require('../models/celebrity');

/* GET home page */
router.get("/movies", (req, res) => { 
  Movies.find().then(Movieslist =>{
    res.render('../views/movies/index.hbs', {Movieslist})
    }).catch(err =>  console.log(err))
    Celebs.find()
    .then(Celebslist => {
      res.render('../views/movies/new.hbs', { Celebslist })
    }).catch(err =>  console.log(err))
  
});


router.post("/movies", (req,res)=> {
  const {title,genre,plot,cast} = req.body
  
  Movies.create({title,genre,plot,cast})
  .then(Movie => {
    res.redirect("/")
  }).catch(error => console.log(err));
})

// router.get("/movies/new", (req, res) => { 
//   res.render('../views/movies/new')
//   // Celebs.find()
//   //   .then(celebsfromdb => {
//   //     res.render('new', {actors :celebsfromdb})
//   //   })
  
// })
;
router.get("/movies/new", (req, res) => { 
 
  Celebs.find()
    .then(Celebslist => {
      res.render('../views/movies/new.hbs', { Celebslist })
    }).catch(err =>  console.log(err))
  })
  ;


module.exports = router;

router.get('/movies/:id', (req,res) => {

  Movies.findById(req.params.id).then( Movie => { 
    res.render('../views/movies/show', { Movie })
  })
})
;