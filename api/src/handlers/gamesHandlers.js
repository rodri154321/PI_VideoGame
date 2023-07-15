const {
    getAllGames,
    getGameById,
    createGameDb
} = require("../controllers/gamesController")

const getGamesHandler = async (req, res) => {

    const { name } = req.query;
    try {
        if (name) {
            const response = await getAllGames(name);
            return res.status(200).json(response);
        }
        const response = await getAllGames();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const getGamesIdHandler = async (req,res) => {
    const {id} = req.params;

    try {
        const response = await getGameById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const postGamesHandler = async (req, res) =>{
    const {name, description, platforms, background_image, released, rating, genres} = req.body;

    try {
        const response = await createGameDb(name, description, platforms, background_image, released, rating, genres);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getGamesHandler,
    getGamesIdHandler,
    postGamesHandler

}