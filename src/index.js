const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const path = require ('path');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3333);