const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getGames,
  postGame,
  updateGame,
  deleteGame
} = require('../controller/game')

const gamesRouter = require('express').Router()

gamesRouter.get('/', getGames)
gamesRouter.post('/', [isAuth], postGame)
gamesRouter.put('/:id', [isAdmin], updateGame)
gamesRouter.delete('/:id', [isAdmin], deleteGame)

module.exports = gamesRouter
