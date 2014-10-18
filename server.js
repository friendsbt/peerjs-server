var PeerServer = require('peer').PeerServer;
var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'console', category: 'default' },
    { type: 'file', filename: 'peerjs-server.log', category: 'default' }
  ]
});
var logger = log4js.getLogger('default');

var port = 9000;
var server = new PeerServer({port: port});
logger.info("server start, listening on port " + port.toString());
server.on('connection', function(id) {
    logger.info(id + 'connected');
});

server.on('disconnect', function(id) {
    logger.info(id + 'disconnected');
})
