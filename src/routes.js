const express = require('express');

const userController = require('./controllers/userController');
const restaurantController = require('./controllers/restaurantController');
const menuController = require('./controllers/menuController');
const loginController = require('./controllers/loginController');

const routes = express.Router();

routes.get('/', (req, res) => {
    var user = req.cookies.user;
    if (!user) user = 0;
    return res.render('index', {user: user});
});

routes.get('/cadastro/usuario', (req, res) => {
    var user = req.cookies.user;
    if (!user) user = 0;
    return res.render('cadastroUser', {user: user});
});

routes.get('/cadastro/restaurante', (req, res) => {
    var user = req.cookies.user;
    if (!user) user = 0;
    return res.render('cadastroRest', {user: user});
});

routes.get('/cadastroMenu', (req, res) => {
    var user = req.cookies.user;
    if (!user) user = 0;
    return res.render('cadastroMenu', {user: user});
});

routes.get('/login', (req, res) => {
    var user = req.cookies.user;
    if (!user) user = 0;
    return res.render('login', {user: user});
});

//rotas dos usuários
routes.get('/users', userController.index);
routes.get('/user', userController.query);
routes.post('/user', userController.create);
routes.post('/updateUser', userController.update);

//rotas dos restaurantes
routes.get('/rests', restaurantController.index);
routes.get('/rest', restaurantController.query);
routes.post('/rest', restaurantController.create);
routes.post('/updateRest', restaurantController.update);

//rotas dos menu
routes.get('/meuMenu', menuController.query);
routes.get('/cardapio', menuController.queryAll);
routes.post('/createMenu', menuController.create);
routes.post('/deleteMenu', menuController.delete);

//login e logout
routes.post('/login', loginController.login);
routes.post('/logout', loginController.logout);

module.exports = routes;