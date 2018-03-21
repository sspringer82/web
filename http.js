const http = require('http');

http
  .createServer((req, res) => {
    switch (req.url) {
      case '/form':
        res.end('Form');
        break;
      case '/list':
      default:
        res.end('List');
        break;
    }
  })
  .listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
  });
