// core require
const http = require('http');
// customize require
const routes = require('./routes');
// start server
const server = http.createServer(routes)
server.listen(3000);