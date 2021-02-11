const mongoose = require('mongoose');
const celebs = require('./models/celebrity');

mongoose.connect('mongodb://localhost/celebrities', {
  userNewUrlParser: true
});

const celebimport = [
  {
    name: 'Will Smith',
    occupation: 'Actor/Singer' ,
    catchPhrase: 'Fresh Price!',
  },
  {
    name: 'Michael Jackson',
    occupation: 'Singer?',
    catchPhrase: 'Cmon',
  },
  {
    name: 'John Dow',
    occupation: 'Unknown?',
    catchPhrase: 'Forgotten',
  },
]

celebs.insertMany(celebimport)
  .then(celebimport => {
    console.log(`Success! Added ${celebimport.length} peoples to the database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
