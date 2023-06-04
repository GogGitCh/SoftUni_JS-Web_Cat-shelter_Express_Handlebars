const Breed = require("../models/Breed");

exports.create = async (breedData) => {
    console.log(breedData);
    const breed = new Breed(breedData);
    await breed.save()
};  

exports.getAll = () => Breed.find();