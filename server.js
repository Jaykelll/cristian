const express = require('express')

//crear el objeto principal de api
const app = express()

//url de prueba
app.get('/prueba', function(request, response){
    response.send("hola")
})

app.get('/prueba2', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true
        })
})

//crear el servidor de aplicacion:
app.listen(5000, 
        console.log('Servidor ejecutando en puerto ' + 5000 ))

