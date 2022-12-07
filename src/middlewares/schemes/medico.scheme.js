//archivo para escribir scheme de medico
const Joi= require('joi') //para validar los datos de entrada

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido:Joi.string().required(),
    email:Joi.string().optional(),
    edad:Joi.number().optional(),
    especialidad:Joi.string().optional()
}

)

module.exports={
    crearMedico
}