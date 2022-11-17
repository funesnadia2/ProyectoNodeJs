// rutas de los tratamientos

const router = require("express").Router()
const tratamientoController = require('../controllers/tratamiento.controller')

router.get('/', tratamientoController.listarTodos)
router.post('/', tratamientoController.crear)
router.get('/:idTratamiento', tratamientoController.listarPorTrat)

module.exports = router