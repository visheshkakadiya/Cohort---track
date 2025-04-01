const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Incoming request...')

    switch (req.method) {
        case 'GET': {
            if (req.url === '/') return res.end('HomePage')
            if (req.url === '/contact-us') return res.end('Contact Us Page');
            if (req.url === '/about-us') return res.end('About Us Page');

        } break;
        case 'POST': {

        } break;
    }

    res.end('Yelo ji data')
})

server.listen(8000, function () {
    console.log('server is running')
})