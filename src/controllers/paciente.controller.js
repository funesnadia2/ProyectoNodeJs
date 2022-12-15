// controlador de pacientes

const errors = require('../const/errors')
const models = require('../database/models/index')
const bcrypt = require('bcryptjs') //dependencia para encriptar contraseña
module.exports = {
    listarTodos: async (req, res, next) => {
        try {
            const pacs = await models.paciente.findAll({
                attributes:{exclude:"password"}   //para no mostrar la pass
            })

            res.json({
                succes: true,
                data: {
                    pacientes: pacs
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            req.body.password = bcrypt.hashSync(req.body.password,10)
            const paciente = await models.paciente.create(req.body)
            const relacion = await models.paciente_medico.create({
                pacienteId: paciente.id,
                medicoId: req.body.medicoId
            })
            res.json({
                succes: true,
                data: {
                    id: paciente.id
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    listarPorPaciente: async (req, res, next) => {
        try {
            const pac = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                attributes:{exclude:"password"}, //para no mostrar la pass
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.medico
                    }
                    ]
                }
                ]
            })
            if (!pac) return next(errors.PacienteInexistente)
            res.json({
                succes: true,
                data: {
                    paciente: pac
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },

    actualizarPac: async (req, res, next) => {
        try {
            const pacModif = await models.paciente.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email:req.body.email,
                password: bcrypt.hashSync(req.body.password,10)
            }, {
                where: {
                    id: req.params.idPaciente
                }
            })

            const pac = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })
            if (!pac) return next(errors.PacienteInexistente)
            res.json({
                succes: true,
                data: {
                    message: 'Paciente actualizado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },
    eliminarPaciente: async (req, res, next) => {
        try {
            const pac = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })
            if (!pac) return next(errors.PacienteInexistente)
            await models.paciente.destroy({
                where: {
                    id: req.params.idPaciente
                }
            })
            res.json({
                succes: true,
                data: {
                    message: 'Paciente Eliminado'
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    },
}