// controlador de medicos
module.exports = {
    listarTodos: async (req,res) =>{
        try {
            console.log('ejecutando listar todos los medicos')
            res.json({
                message: "endpoint listarTodos los medicos"
            })
        } catch (error) {
            console.log(error)
            
        }

    },

    crear: async (req,res) =>{
        try {
            console.log('ejecutando crear medico')
            res.json({
                message: "endpoint crear medico"
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },

    listarPorMed: async (req,res) =>{
        try {
            console.log('ejecutando listarPorMed de medicos ' + req.params.idMedico)
            res.json({
                message: "endpoint listarPorMed para el medico: " + req.params.idMedico
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },
}