const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebrities = new Schema({
 name: String,
 occupation: String,
 catchPhrase: String,
});
 

module.exports = mongoose.model('celebrities', celebrities);


