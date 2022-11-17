// conecta las rutas

const {Router} = require('express')
const pacienteRoutes = require("./pacientes.routes")
const medicoRoutes = require ("./medicos.routes")
const tratamientoRoutes = require ("./tratamientos.routes")

const rutas_init = () => {
    const router = Router()
    router.use("/pacientes", pacienteRoutes)
    router.use("/medicos", medicoRoutes)
    router.use("/tratamientos", tratamientoRoutes)
    return router
}

module.exports = {rutas_init}