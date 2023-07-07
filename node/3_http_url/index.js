const http = require('http');
const PORT = 5000;

const address = http.createServer((res, req) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if(!name){
        res.end('<h1>Preencha seu nome</h1> <form method="GET"> <input text="text" name="name"> <input type="submit" value="Enviar"/> </form>')
    }else{
        res.end(`Seja bem vindo, ${name}`)
    }
});

server.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});