var app, connect, port, serveStatic;

connect = require('connect');

serveStatic = require('serve-static');

port = process.env.PORT || 3000;

app = connect();

app.use(serveStatic('public/', {
  'index': ['index.html']
}));

app.listen(port);

console.log('Server starting on http://0.0.0.0:%s', port);
