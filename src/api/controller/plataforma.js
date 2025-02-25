const Plataformas = require('../models/plataforma')

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataformas.find().populate('games')
    return res.status(200).json(plataformas)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const getPlataformaByid = async (req, res, next) => {
  try {
    const plataforma = await Plataformas.findById(id).populate('games')
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataformas(req.body)
    const plataformaSaved = await newPlataforma.save()
    return res.status(201).json(plataformaSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error al crear plataforma')
  }
}
const updatePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params

    // Obtener la plataforma actual
    const oldPlataforma = await Plataformas.findById(id)
    if (!oldPlataforma) {
      return res.status(404).json({ error: 'Plataforma no encontrada' })
    }

    // Combinar los juegos sin duplicados
    const mergedGames = [
      ...new Set([...oldPlataforma.games, ...(req.body.games || [])])
    ]

    // Actualizar solo los campos proporcionados
    const plataformaUpdated = await Plataformas.findByIdAndUpdate(
      id,
      { ...req.body, games: mergedGames },
      { new: true, runValidators: true }
    )

    return res.status(200).json(plataformaUpdated)
  } catch (error) {
    return res.status(400).json({
      error: 'Error al actualizar la plataforma',
      details: error.message
    })
  }
}

const plataformadelete = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataformaDeleted = await Plataformas.findByIdAndDelete(id)
    return res.status(200).json({
      messade: 'Elemento eliminado',
      elemento: plataformaDeleted
    })
  } catch (error) {
    return res.status(400).json('error al eliminar plataforma')
  }
}

module.exports = {
  getPlataformas,
  postPlataforma,
  updatePlataforma,
  getPlataformaByid,
  plataformadelete
}
