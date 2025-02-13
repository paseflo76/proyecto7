const { isAdmin } = require('../../middlewares/auth')
const { getUsers, register, login, deleteUser } = require('../controller/user')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)
usersRoutes.delete('/:id', [isAdmin], deleteUser)
module.exports = usersRoutes
