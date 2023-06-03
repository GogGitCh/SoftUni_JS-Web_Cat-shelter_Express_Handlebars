const mongoose = require('mongoose');

// const dbString = 'mongoose://127.0.0.1:27017/catShelter'
const dbString = 'mongodb://127.0.0.1:27017/catShelter'


async function main() {
    await mongoose.connect(dbString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('DB: CatShelter - CONNECTED!');
}

main();