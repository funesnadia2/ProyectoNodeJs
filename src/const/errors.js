module.exports ={
    'ValidationError':{
        code:1000,
        message: 'Error de validacion'
    },

    'FaltanCampos':{
        code:1001,
        message: 'Faltan campos requeridos'
    },

    'MedicoInexistente':{
        code:2000,
        message: 'No existe el medico ingresado'
    },

    'PacienteInexistente':{
        code:2001,
        message: 'No existe el paciente ingresado'
    },

    'TratamientoInexistente':{
        code:2002,
        message: 'No existe el tratamiento ingresado'
    },

    'CredencialesInvalidas':{
        code:3000,
        message: 'email o passwrord invalidos'
    },

    'SesionExpirada' :{
        code:4000,
        message: 'Sesion expirada'
    },

    'PacienteNoAutorizado' :{
        code:5000,
        message: 'Paciente No Autorizado'
    }
}