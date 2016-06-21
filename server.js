'use strict';

var Server = require('./public/js/app'),
    debug = require('debug')('express:server'),
    http = require('http');

var app = new Server.Server(__dirname, 'dist').app ;

var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

var httpServer = http.createServer(app);

httpServer.on('error', onError);

httpServer.on('listening', onListening);

httpServer.listen(port);

//  event handlers
function onError(err){
    if(err.syscall !== 'listen') throw err;
    
    var bind = typeof port ==='string' ? 'Pipe ' + port : 'Port ' + port;
        
    switch(err.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw err;
    }
}

function onListening(){
    var addr = httpServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr;
        
    debug('Listening on ' + bind);
}

function normalizePort(p){
    var port = parseInt(p);
    
    if (isNaN(port)) return p;
    
    if (port >= 0) return port;
    
    return false;
}
