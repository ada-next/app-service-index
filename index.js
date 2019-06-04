const Server = require("ada-cloud-hub/boot");
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');

let server = new Server();
server.use(static(__dirname + './dist'));
server.use(bodyParser());
server.startup();

module.exports = server;