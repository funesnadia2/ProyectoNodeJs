// conecta las rutas

const {Router} = require('express')
const pacienteRoutes = require("./pacientes.routes")
const medicoRoutes = require ("./medicos.routes")
const tratamientoRoutes = require ("./tratamientos.routes")
const authRoutes = require ("./auth.routes")
const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
    const router = Router()
    router.use("/pacientes", decodeJWT, pacienteRoutes)
    router.use("/medicos", medicoRoutes)
    router.use("/tratamientos", tratamientoRoutes)
    return router
}
const rutas_auth = () => {
    const router = Router()
    router.use ("/auth", authRoutes)
    return router
}

module.exports = {rutas_init, rutas_auth}