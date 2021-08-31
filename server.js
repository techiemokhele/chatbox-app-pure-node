// 404 event handler
const http = require('http')
const path = require('path')
const process = require('process')
const { static } = require('./routes/static')
const {add} = require('./routes/add')
const {update} = require('./routes/update')
const host = 'localhost'
const port = 8000
const routes = {
    '/': (req,res) => static({
        filename: path.resolve(__dirname, 'public/index.html'),
        contentType: 'text/html'
    },res),
    '/css/normalize.css': (req, res) => static({
        filename: path.resolve(__dirname, 'public/css/normalize.css'),
        contentType: 'text/css'
    }, res),
    '/css/style.css': (req, res) =>  static({
        filename: path.resolve(__dirname, 'public/css/style.css'),
        contentType: 'text/css'
    }, res),
    '/image/helpbot.jpg': (req, res) => static({
        filename: path.resolve(__dirname, 'public/image/helpbot.jpg'),
        contentType: 'image/jpg'
    }, res),
    '/js/index.js': (req, res) => static({
        filename: path.resolve(__dirname, 'public/js/index.js'),
        contentType: 'text/js'
    }, res),


}

const server = http.createServer((req,res)=> {
    const url = require('url').parse(req.url)
    if(routes[url.pathname]) {
        return routes[url.pathname](req,res)
    }
    res.writeHead(404, { 'Content-type': 'application/json' })
    res.end(JSON.stringify({
        response: 'failed',
        data: null,
        message:'resource was not found'
    }))
},)
server.listen(port, host, ()=> {
    console.log(`The server has started on 'http://${host}:${port}'` )
});
