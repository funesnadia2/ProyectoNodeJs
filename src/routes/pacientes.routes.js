// rutas de los pacientes

const router = require("express").Router()
const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/', pacienteController.listarTodos)
router.post('/', validate(pacienteScheme.crearPaciente),pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarPorPaciente)
router.put('/:idPaciente', validate(pacienteScheme.crearPaciente),pacienteController.actualizarPac)
router.delete('/:idPaciente', pacienteController.eliminarPaciente)

module.exports = router