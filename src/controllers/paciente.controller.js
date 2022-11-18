// controlador de pacientes

module.exports = {
    listarTodos: async (req,res) =>{
        try {
            console.log('ejecutando listar todos los pacientes')
            res.json({
                message: "endpoint listarTodos los pacientes"
            })
        } catch (error) {
            console.log(error)
            
        }

    },

    crear: async (req,res) =>{
        try {
            console.log('ejecutando crear paciente')
            res.json({
                message: "endpoint crear paciente"
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },

    listarPorPaciente: async (req,res) =>{
        try {
            console.log('ejecutando listarPorPaciente de pacientes ' + req.params.idPaciente)
            res.json({
                message: "endpoint listarPorPaciente para el paciente: " + req.params.idPaciente
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },
}