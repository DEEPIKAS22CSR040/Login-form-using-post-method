const http = require('http');
const qs = require('querystring');

const server = http.createServer(function(req, res) {
    var d = '';
    req.on('data', function(chunk) {
        d += chunk;
    });

    req.on('end', function() {
        var query = qs.parse(d);
        const name = query["name"];
        const email = query["email"];
        
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Response</title>
                <style>
                    .container {
                        border: 2px solid #ccc;
                        padding: 20px;
                        width: 300px; 
                        margin: 0 auto; 
                        background-color: aqua; 
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <p>Hello ${name}, your email id is ${email}</p>
                    <p> you signed in successfully</p>
                </div>
            </body>
            </html>
        `);
        res.end();
    });
});

server.listen(3333);
