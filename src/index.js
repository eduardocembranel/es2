const path = require ('path');
const express = require('express');
const routes = require('./routes');

const app = express();

//middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3333);