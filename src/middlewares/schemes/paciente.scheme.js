//archivo para escribir scheme de paciente
const Joi= require('joi') //para validar los datos de entrada

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido:Joi.string().required(),
    email:Joi.string().optional(),
    edad:Joi.number().optional(),
    password:Joi.string().required()
}

)

module.exports={
    crearPaciente
}