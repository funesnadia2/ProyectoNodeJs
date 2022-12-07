//archivo para escribir scheme de medico
const Joi= require('joi') //para validar los datos de entrada

let crearTratamiento = Joi.object({
    descripcion: Joi.string().required(),
    complejidad:Joi.string().required()
}
)

module.exports={
    crearTratamiento
}