// rutas de los medicos

const router = require("express").Router()
const medicoController = require('../controllers/medico.controller')

router.get('/', medicoController.listarTodos)
router.post('/', medicoController.crear)
router.get('/:idMedico', medicoController.listarPorMed)

module.exports = router