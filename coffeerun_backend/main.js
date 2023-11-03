const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/index.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});
server.listen(3000, () => {
    console.log('Server running on port 3000 ...');
});
