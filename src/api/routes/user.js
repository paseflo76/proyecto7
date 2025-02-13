const { isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  deleteUser,
  updateUser
} = require('../controller/user')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)
usersRoutes.put('/:id', [isAdmin], updateUser)
usersRoutes.delete('/:id', [isAdmin], deleteUser)

module.exports = usersRoutes
