const { Router } = require("express");
const {getGamesHandler, getGamesIdHandler, postGamesHandler} = require("../handlers/gamesHandlers")


const gamesRouter = Router();

gamesRouter
.get('/', getGamesHandler)
.get("/:id", getGamesIdHandler)
.post("/", postGamesHandler)

module.exports = gamesRouter;
