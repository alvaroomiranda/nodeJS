const http = require('http');
const { text } = require('stream/consumers');
var utf8 = require('utf8');

// console.log(http)

// PORTA:
const PORT = 3000
//localhost:3000 no navegador

// CRIANDO SERVIDOR:
// .write escreve algo como resposta
// .end/"para" o servidor

// const server = http.createServer((req, res)=>{
//     res.write('Olá mundo!')
//     res.end()
// });


// RETORNANDO TEXTO:

// const server = http.createServer((req, res)=>{
//     if(req.url === '/home'){
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Pagina Home')
//         res.end()
//     }else if(req.url === '/sobre'){
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Pagina Sobre')
//         res.end()
//     }else{
//         res.writeHead(404, {'Content-Type':'text/plan'})
//         res.write('Pagina nao encontrada')
//         res.end()
//     }
// });


// RETORNANDO CONTEUDO HTML:

// res.write('<meta charset=utf-8> para aceitar texto em portugues')

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1> Página Home </h1>')
        res.write('<p> Esta é a pagina Home </p>')
        res.end()
    }else if(req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1> Página Sobre </h1>')
        res.write('<p> Esta é a pagina Sobre </p>')
        res.end()
    }else if(req.url === '/contato'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('Página Contato')
        res.write('Esta é a pagina Contato')
        res.end()
    }else{
        res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('Página não encontrada')
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});