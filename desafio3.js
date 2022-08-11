// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//    //respuesta.end('Hola mundo')
//     respuesta.end(JSON.stringify({ id:100, name: "guille"}))
// });


// const connectedServer = server.listen(8080, () => {
//    console.log(
//     `FUNCIONANDO Y ESCUCHANDO en el puerto ${
//         connectedServer.address().port}`)
// })


const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));

const elements = [
    {
        title: "sopa",
        price: 40,
        thumbnail: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/02/como-hacer-sopa-de-fideo-caldosa.jpg"
        },
    {
        title: "arroz",
        price: 30,
        thumbnail: "https://www.goya.com/media/4218/mexican-rice.jpg?quality=80"  
        },
   {
        title: "verduras",
        price: 28,
        thumbnail: "https://images-gmi-pmc.edge-generalmills.com/b2d1141c-7d89-43ba-bfdf-7a2d0ee81f0b.jpg"         
        }
]

const sopa = {
    title: "sopa",
    price: 40,
    thumbnail: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/02/como-hacer-sopa-de-fideo-caldosa.jpg"
    }

const arroz = {
    title: "arroz",
    price: 30,
    thumbnail: "https://www.goya.com/media/4218/mexican-rice.jpg?quality=80"  
    }
const verduras = {
    title: "verduras",
    price: 28,
    thumbnail: "https://images-gmi-pmc.edge-generalmills.com/b2d1141c-7d89-43ba-bfdf-7a2d0ee81f0b.jpg"         
    }



app.get('/productos', (req, res) => {
    res.send(elements)
 });

 app.get('/verduras', (req, res) => {
    res.send({
        title: "verduras",
        price: 28,
        thumbnail: "https://images-gmi-pmc.edge-generalmills.com/b2d1141c-7d89-43ba-bfdf-7a2d0ee81f0b.jpg"         
        })
 });


 
 


