const mongoose = require('mongoose');

const dbString = 'mongodb://127.0.0.1:27017/catShelter'


// async function dbConnect() {
//     await mongoose.connect(dbString)
//     .then(() => console.log('DB: CatShelter - CONNECTED!'))
//     .catch((err) => console.log(err.message));
// }

async function dbConnect() {
    try {
      await mongoose.connect(dbString, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
      console.log('DB: CatShelter - CONNECTED!');
    } catch (err) {
      console.error(err.message);
    }
  }
  

module.exports = dbConnect;