//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks=require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//inicio y configuracion del servidor
server
//recivir los datos del req.body 
.use(express.urlencoded({ extended: true}))
//configurar archivos estaticos (css, scripts, imagenes)
.use(express.static("public"))
//rutas de la aplicacion
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//inicio del servidor
.listen(5500)