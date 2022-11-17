// rutas de los pacientes

const router = require("express").Router()
const pacienteController = require('../controllers/paciente.controller')

router.get('/', pacienteController.listarTodos)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarPorPaciente)

module.exports = router