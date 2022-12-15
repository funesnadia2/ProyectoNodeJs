// controlador de autenticacion

const errors = require('../const/errors')
const models = require('../database/models/index')
const bcrypt = require('bcryptjs') //dependencia para encriptar contraseña
const signJWT = require('../middlewares/signJWT')
module.exports = {
    login: async (req, res, next) => {
        try {
        // verifico que el paciente exista comparando con email
        const paciente= await models.paciente.findOne({
            where: {
                email: req.body.email
            }
        })

        var okContrasenia= false
        if (paciente){ // existe el email del paciente
            okContrasenia = bcrypt.compareSync(req.body.password,paciente.password)

        }

        if (!paciente || !okContrasenia){
            return next (errors.CredencialesInvalidas)
        }

        res.json({
            succes:true,
            data:{
                token: signJWT(paciente),
                id: paciente.id
            }
        })

        } catch (err) {
            return next(err)
        }

    },

    registrarse: async (req, res, next) => {
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
    }
}