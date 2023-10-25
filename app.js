const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socket = require('socket.io');
const routes = require('./routes/routes')

const app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;

// Render Index page
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', routes)

// Start Server
const server = http.createServer(app);
const io = socket(server);
require('./utils/socket')(io);

server.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
