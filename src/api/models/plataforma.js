const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    games: [{ type: mongoose.Types.ObjectId, ref: 'games', required: false }]
  },
  {
    timestamps: true
  }
)

const Plataforma = mongoose.model(
  'plataformas',
  plataformaSchema,
  'plataformas'
)

module.exports = Plataforma
