const Game = require('../models/game')

const getGames = async (req, res, next) => {
  try {
    const games = await Game.find()
    return res.status(200).json(games)
  } catch (error) {
    return res.status(400).json('error en la solicitud')
  }
}

const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body)
    const gameSaved = await newGame.save()
    return res.status(201).json(gameSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error al publicar')
  }
}

const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params

    const newGame = new Game(req.body)

    newGame._id = id
    const gameUpdated = await Game.findByIdAndUpdate(id, newGame, {
      new: true
    })
    return res.status(200).json(gameUpdated)
  } catch (error) {
    return res.status(400).json('error al modificar')
  }
}
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const gameDeleted = await Game.findByIdAndDelete(id)
    return res.status(200).json({
      messade: 'Elemento eliminado',
      elemento: gameDeleted
    })
  } catch (error) {
    return res.status(400).json('error delete')
  }
}

module.exports = {
  getGames,
  postGame,
  updateGame,
  deleteGame
}
