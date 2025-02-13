const User = require('../models/user')
const { generateSign } = require('../../config/jwt')
const bcrypt = require('bcrypt')
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })
    const duplicateUser = await User.findOne({ userName: req.body.userName })

    if (duplicateUser) {
      return res.status(400).json('Ese Nombre no Esta Disponible')
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateSign(user._id)
        return res.status(200).json({ user, token })
      }
    } else {
      return res.status(400).json('el usuario o la contraseña son incorrectos')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const UserDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json({ mensaje: 'usuario eliminado', UserDeleted })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getUsers, register, login, deleteUser }
