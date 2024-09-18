/*
    Servidor simples
    usando o http sem express.
*/
import http from "http";

const port = 3000;

const server = http.createServer((request, response)=>{
    // vou criar as rotas do meu servidor aqui.
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>It works!</h1>');
});

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});