var connect = require('connect');

var serveStatic = require('serve-static');

var port = process.env.PORT || 3000;

var app = connect();

app.use(serveStatic('public/', {
  'index': ['index.html']
}));

app.listen(port);

console.log('Server starting on http://0.0.0.0:%s', port);
