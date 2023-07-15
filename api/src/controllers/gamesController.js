require('dotenv').config();
const {Videogame, Genres} = require('../db.js');
const axios = require('axios');
const {YOUR_API_KEY} = process.env;

//------------------------- CREAR UN JUEGO NUEVO-------------------------
const createGameDb = async (name, description, platforms, background_image, released, rating, genres) => {
    const newGame = await Videogame.create({ name, description, platforms, background_image, released, rating});
    await newGame.setGenres(genres.map((gen)=> gen));
    return newGame;
  };


//----------------------------------- BUSCAR JUEGOS POR ID-----------------------------------
const getGameById = async (id) => {
    //traemos un game por ID diferenciando si es de la api o la db
    if (isNaN(id)) {
      const game = await Videogame.findByPk(id);
      return game;
    }
    const game = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)).data;
  
    return game;
  };



//------------------------- BUSCAR TODOS LOS JUEGOS Y BUSCAR POR NOMBRE-------------------------
const getGamesDb = async () => {
//traemos los games de la DB con su respectivo Genres y lo retornamos
    const allGamesDb = await Videogame.findAll({
      include: {
        model: Genres,
        attributes: ["name"],
      },
    });
    return allGamesDb;
  };

  const getGamesApi = async () => {
    //traemos los games de la API
    const gamesApi = (await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)).data.results; 
  
    //mapeamos y damos formato de lo que necesitamos
    const apiMap = gamesApi.map((game) => {
      return {
          id: game.id,
          name: game.name,
          description: game.description,
          platforms:game.platforms,
          background_image:game.background_image,
          released:game.released,
          rating:game.rating,
          genres: game.genres
      };
    });
     return apiMap;
  };

  const getAllGames = async (name) => {
    const GamesDb = await getGamesDb(); //USUARIOS DB
    const GamesApi = await getGamesApi(); //USUARIOS API
    const allGames = [...GamesDb, ...GamesApi]; //*TODOS LOS USUARIOS

    if (name) {

        //const numBusqueda = 15;
        let filterGames = allGames.filter((games) => 
          games.name.toLowerCase().includes(name.toLowerCase()));
        //validacion para que no devuelva un array u objeto vacio 

        if (!filterGames.length)
          throw new Error(`No se encontro el juego con el nombre ${name}`);
        return filterGames;
      }
      return allGames;
    };
    

  module.exports ={
    getAllGames,
    getGameById,
    createGameDb
  }