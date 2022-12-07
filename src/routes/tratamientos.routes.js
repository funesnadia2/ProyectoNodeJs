// rutas de los tratamientos

const router = require("express").Router()
const tratamientoController = require('../controllers/tratamiento.controller')
const validate = require('../middlewares/validate')
const tratamientoScheme = require('../middlewares/schemes/tratamiento.scheme')

router.get('/', tratamientoController.listarTodos)
router.post('/', validate(tratamientoScheme.crearTratamiento),tratamientoController.crear)
router.get('/:idTratamiento', tratamientoController.listarPorTrat)
router.put('/:idTratamiento', validate(tratamientoScheme.crearTratamiento),tratamientoController.actualizarTrat)
router.delete('/:idTratamiento', tratamientoController.eliminarTrat)


module.exports = router