const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    case '/about':
      fs.readFile('about.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    case '/contact-me':
      fs.readFile('contact-me.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    default:
      fs.readFile('404.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
  }
});

server.listen(8080, () => {
  console.log('Server running at port 8080');
});
