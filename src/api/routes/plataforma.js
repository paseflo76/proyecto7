const { isAdmin } = require('../../middlewares/auth')
const {
  getPlataformas,
  postPlataforma,
  updatePlataforma,
  plataformadelete,
  getPlataformaByid
} = require('../controller/plataforma')

const plataformasRouter = require('express').Router()

plataformasRouter.get('/', getPlataformas)
plataformasRouter.post('/', [isAdmin], postPlataforma)
plataformasRouter.put('/:id', [isAdmin], updatePlataforma)
plataformasRouter.delete('/:id', [isAdmin], plataformadelete)

module.exports = plataformasRouter
