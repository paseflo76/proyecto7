const mongoose = require('mongoose')
const games1 = require('../../data/games')
const Game = require('../../api/models/game')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://paseflo34:xFlyjEfHFot3AgI5@cluster0.3zwcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Game.collection.drop()
    console.log('series eliminadas')

    await Game.insertMany(games1)
    console.log('series introducidas')
  } catch (error) {
    console.log('error algo salio mal:', error)
  } finally {
    await mongoose.disconnect()
    console.log('desconectado de la BBDD')
  }
}
lanzarSemilla()
