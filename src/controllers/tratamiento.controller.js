// controlador de tratamientos

const errors = require('../const/errors')
const models = require('../database/models/index')
module.exports = {
    listarTodos: async (req, res, next) => {
        try {
            const trats = await models.tratamiento.findAll()

            res.json({
                succes: true,
                data: {
                    tratamientos: trats
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const tratamiento = await models.tratamiento.create(req.body)
            res.json({
                succes: true,
                data: {
                    id: tratamiento.id
                }
            }
            )
        } catch (err) {
            return next(err)
        }

    },

    listarPorTrat: async (req, res, next) => {
        try {
            const trat = await models.tratamiento.findOne({
                where: {
                    id: req.params.idTratamiento
                }
            })
            if (!trat) return next(errors.TratamientoInexistente)
            res.json({
                succes: true,
                data: {
                    tratamiento: trat
                }
            }
            )
        } catch (err) {
            return next(err)
        }

    },
    actualizarTrat: async (req, res, next) => {
        try {
            const trat = await models.tratamiento.findOne({
                where: {
                    id: req.params.idTratamiento
                }
            })
            if (!trat) return next(errors.TratamientoInexistente)
            const tratModif = await models.tratamiento.update({
                descripcion: req.body.descripcion,
                complejidad: req.body.complejidad
            }, {
                where: {
                    id: req.params.idTratamiento
                }
            })
            res.json({
                succes: true,
                data: {
                    message: 'Tratamiento actualizado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },
    eliminarTrat: async (req, res, next) => {
        try {
            const trat = await models.tratamiento.findOne({
                where: {
                    id: req.params.idTratamiento
                }
            })
            if (!trat) return next(errors.TratamientoInexistente)
            await models.tratamiento.destroy({
                where: {
                    id: req.params.idTratamiento
                }
            })
            res.json({
                succes: true,
                data: {
                    message: 'Tratamiento eliminado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },
}