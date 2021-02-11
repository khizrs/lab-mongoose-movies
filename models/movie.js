const mongoose = require("mongoose"); 
const Schema  = mongoose.Schema;


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const Movie = new Schema({
 title: String, 
 genre: String,
 plot: String,
 cast:   [{
   type: Schema.Types.ObjectId,
   ref: 'celebrity'
 }]
});
 

module.exports = mongoose.model('movies', Movie)


