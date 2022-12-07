// controlador de medicos

const errors = require('../const/errors')
const models = require('../database/models/index')

module.exports = {
    listarTodos: async (req, res, next) => {
        try {
            const meds = await models.medico.findAll()
            res.json({
                succes: true,
                data: {
                    medicos: meds
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const med = await models.medico.create(req.body)
            res.json({
                succes: true,
                data: {
                    id: med.id
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    listarPorMed: async (req, res, next) => {
        try {
            const med = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                },
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }
                    ]
                }
                ]
            })

            if (!med) return next(errors.MedicoInexistente)

            res.json({
                succes: true,
                data: {
                    medico: med
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    actualizarMed: async (req, res, next) => {
        try {
            const medModif = await models.medico.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                edad: req.body.edad
            }, {
                where: {
                    id: req.params.idMedico
                }
            })
            const med = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })
            if (!med) return next(errors.MedicoInexistente)
            res.json({
                succes: true,
                data: {
                    message: 'Medico actualizado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    eliminarMed: async (req, res, next) => {
        try {
            const med = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })
            if (!med) return next(errors.MedicoInexistente)
            await models.medico.destroy({
                where: {
                    id: req.params.idMedico
                }
            })
            res.json({
                succes: true,
                data: {
                    messge: 'Medico Borrado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },
}