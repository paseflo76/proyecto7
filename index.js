require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const plataformasRouter = require('./src/api/routes/plataforma')
const gamesRouter = require('./src/api/routes/game')
const usersRoutes = require('./src/api/routes/user')

const app = express()
/* console.log(process.env.DB_URL) */
//! linea para configurar que mi servidor sea capaz de recoger datos en formato json
app.use(express.json())

connectDB()

app.use('/api/v1/games', gamesRouter)
app.use('/api/v1/plataformas', plataformasRouter)
app.use('/api/v1/users', usersRoutes)

// todas las rutas que no tengan respuesta entrarán por aquí
app.use('/saludar', (req, res, next) => {
  return res.status(200).json('Hola')
})

app.use('*', (rep, res, next) => {
  return res.status(404).json('route not found')
})

app.listen(3000, () => {
  console.log(' servidor levantado en: http://localhost:3000')
})
