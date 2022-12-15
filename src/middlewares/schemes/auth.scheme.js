//archivo para escribir scheme de autenticacion
const Joi= require('joi') //para validar los datos de entrada

let login = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

module.exports={
    login
}