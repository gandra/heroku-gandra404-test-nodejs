const http = reuire('http');

const port = process.env.PORT;

http
    .createServer( (req, resp) => {
        resp.writeHead(200, {'Content-Type': 'text/plain'});
        resp.end('This is Heroku test by Gandra \m');
    })
    .listen( port, () => {
        console.log('Webserver radi ....');
    });