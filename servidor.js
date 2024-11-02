const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo ao servidor Node.js!');
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta e a pagina Sobre.');
  } else if (req.url === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta e a pagina Contato.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina nao encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
