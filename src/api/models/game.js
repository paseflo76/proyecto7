const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    categories: [
      {
        type: String,
        enum: [
          'Acción',
          'Aventura',
          'RPG',
          'Shooter',
          'Estrategia',
          'Survival Horror',
          'Carreras',
          'Deportes',
          'Plataformas',
          'Battle Royale'
        ]
      }
    ]
  },
  {
    timestamps: true
  }
)

const Game = mongoose.model('games', gameSchema, 'games')

module.exports = Game
