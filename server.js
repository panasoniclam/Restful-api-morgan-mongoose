//define defendences
require('dotenv').config();
const http = require('http');
const app = require('./app');
//create a server 
 const server = http.createServer(app);
 //listen a port ?
 const port = process.env.PORT;
 server.listen(port);
