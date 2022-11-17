// controlador de tratamientos

module.exports = {
    listarTodos: async (req,res) =>{
        try {
            console.log('ejecutando listar todos los tratamientos')
            res.json({
                message: "endpoint listarTodos los tratamientos"
            })
        } catch (error) {
            console.log(error)
            
        }

    },

    crear: async (req,res) =>{
        try {
            console.log('ejecutando crear tratamiento')
            res.json({
                message: "endpoint crear tratamiento"
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },

    listarPorTrat: async (req,res) =>{
        try {
            console.log('ejecutando listarPorTrat de tratamientos')
            res.json({
                message: "endpoint listarPorTrat para el tratamiento: " + req.params.idTratamiento
            })
        } catch (error) {
            console.log(error)
            
        }
        
    },
}