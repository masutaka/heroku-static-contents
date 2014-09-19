var connect = require('connect');

var serveStatic = require('serve-static');

var port = process.env.PORT || 3000;

var app = connect();

var basicAuth = require('basic-auth-connect');
var username = process.env.BASIC_AUTH_USERNAME;
var password = process.env.BASIC_AUTH_PASSWORD;

if (username && password) {
  app.use(basicAuth(username, password));
}

app.use(serveStatic('public/', {
  'index': ['index.html']
}));

app.listen(port);

console.log('Server starting on http://0.0.0.0:%s', port);
