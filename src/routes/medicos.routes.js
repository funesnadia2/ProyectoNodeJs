// rutas de los medicos

const router = require("express").Router()
const medicoController = require('../controllers/medico.controller')
const validate = require('../middlewares/validate')
const medicoScheme = require('../middlewares/schemes/medico.scheme')

router.get('/', medicoController.listarTodos)
router.post('/', validate(medicoScheme.crearMedico),medicoController.crear)
router.get('/:idMedico', medicoController.listarPorMed)
router.put('/:idMedico', validate(medicoScheme.crearMedico),medicoController.actualizarMed)
router.delete('/:idMedico', medicoController.eliminarMed)

module.exports = router