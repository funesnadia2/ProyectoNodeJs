const jwt = require('jsonwebtoken') //para crear el token
const globalsConstants= require('../const/globalsConstants')

module.exports = function(paciente) {
    if (paciente){
        //se crea el token con los datos del paciente
        const token = jwt.sign({
            id:paciente.id
        },
        globalsConstants.JWT_SECRET,{
            expiresIn:'3000m'
        }
        )
        return token // devuelvo el token 
    }else {
        return null //si no hay paciente devulevo null
    }
}