const express= require('express')
const globalsConstants = require('./const/globalsConstants')
const routerConfig= require ('./routes/index.routes')
const logger = require('morgan')
const errorHandler = require('./middlewares/error')
let createError = require('http-errors')


const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(logger('dev'))
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())
    app.use (function(req,res,next){
        next(createError(404))
    })
    app.use(errorHandler)
     
};

const init = () => {
    const app=express ()  // crea una instancia de express

    configuracionApi(app) // configura API
    configuracionRouter (app)  //configura routes

    app.listen(globalsConstants.PORT)
    console.log('La aplicacion se esta ejecutando en el puerto:'+ globalsConstants.PORT)
}

init();


