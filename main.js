//const http = require('http')
//const puerto = 3000
//
//let hora = new Date().getHours();
//
//
//const server = http.createServer((req, res)=>{
//    console.log("Llego una peticion")
//    if(hora >=6 && hora <= 12){
//        res.end('Buenos Dias!')
//    }else if(hora >= 13 && hora <= 19){
//        res.end('Buenas Tardes!')
//    }else if(hora<=5 || hora>=20 ){
//        res.end('Buenas Noches!')
//    }
//    
//})
//
//server.listen(puerto, ()=>{
//    console.log(`Servidor escuchando puerto ${puerto}`)
//})


//const express = require('express')
//
//const app = express()
//const puerto=8080
//
//app.get('/', (req, resp) =>{
//    resp.status(200).send('Hola soy Home')
//})
//
//app.get('/publicaciones', (req, resp) =>{
//    resp.send('Hola soy ruta Publicaciones')
//})
//
//
////Paramentros - localhost:8080/user/Lucas
//app.get('/user/:nombre', (req, resp) =>{
//    const nombre = req.params.nombre
//    resp.send(`Hola ${nombre} bienvenido`)
//})
//
//
////Query - localhost:8080/user?nombre=Lucas&apellido=Montanari
//app.get('/user', (req, resp) =>{
//    const {nombre, apellido} = req.query
//    resp.send(`Hola ${nombre} ${apellido} bienvenido`)
//})
//
//app.listen(puerto, () =>{
//    console.log(`Servidor escuchando puerto ${puerto}`)
//})


//EJERCICIO 2
//const express = require('express')
//
//const app = express()
//const puerto=8080
//let visitas=0
//
//app.use((req, res, next) =>{
//    visitas++
//    next()
//})
//
//app.get('/', (req, resp) =>{
//    resp.status(200).send('<h1 style="color: blue">Bienvenidos al servido express</h1>')
//})
//
//
//app.get('/visitas', (req, resp) =>{
//    resp.send(`El servidor tuvo ${visitas} visitas`)
//})
//
//app.get('/fyh', (req, resp) =>{
//    let fyh = {fyh: new Date()};
//    resp.send(fyh)
//})
//
//app.listen(puerto, () =>{
//    console.log(`Servidor escuchando puerto ${puerto}`)
//})


