const express = require('express')
const http = require('http');
const path = require('path')
const port = 3000;

const app = express();

app.engine('html', require('ejs-mate'));
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/series', (req, res) => {
    res.render('series');
});

app.get('/peliculas', (req, res) => {
    res.render('peliculas');
});

http.createServer(app).listen(port, () => {
    console.log(`server staring ${port}`);
});
