require('dotenv').config();
const {Genres} = require('../db.js');
const axios = require('axios');
const {YOUR_API_KEY} = process.env;

const getAllGenres = async () =>{
    const genresApi = (await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)).data.results;
     const newGenres = await genresApi.map((gen) => {
         Genres.create({name: gen.name})
         return gen.name
     })
     return newGenres;
};

module.exports ={
    getAllGenres
};