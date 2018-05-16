const express = require('express');
const app = express();
const body_parser = require('body-parser');
const fs = require('fs');
const http = require('http');

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.get('/', (req, res) => {
  fs.readFile('./html/index.html', (err, data) => {
    if(err) {
      console.log(err);
      throw err;
    }
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

http.createServer(app).listen(8080, () => {
  console.log('Server start');
});
