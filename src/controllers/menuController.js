const connection = require('../database/connection')
const validade = require('./validate');

module.exports = {
    async index (request, response){
        const menu = await connection('menu')
            .join('restaurants', 'restaurants.id', '=', 'menu.rest_id')
            .select(['menu.*', 'restaurants.name', 'restaurant.city']);
            
        return response.json(menu);
    },

    async create (request, response) {
        const { name, desc, value, img } = request.body;
        const rest_id = request.cookies.id;

        const msg = validade.valCreateMenu(name, desc, value, img);
        if (msg != 'ok') 
            return response.json({ id: -1, msg: msg });

        const [id] = await connection('menu').insert({ 
            name, desc, value, img, rest_id });

        return response.json({ id: id, msg: 'ok' });
    },

    async query (request, response) {
        const rest_id = request.cookies.id;

        const menus = await connection('menu')
            .join('restaurants', 'restaurants.id', '=', 'menu.rest_id')
            .where('menu.rest_id', rest_id)
            .select('menu.*');
        
        var user = request.cookies.user;
        if (!user) user = 0;
        return response.render('meuMenu', {user: user, prof: menus});
    },

    async queryAll (request, response) {
        const menus = await connection('menu')
            .join('restaurants', 'restaurants.id', '=', 'menu.rest_id')
            .select(['menu.*', 'restaurants.uf', 'restaurants.city', 
                'restaurants.name as restName']);
        
        var user = request.cookies.user;
        if (!user) user = 0;
        return response.render('cardapio', {user: user, prof: menus});
    },

    async delete (request, response) {
        const { id } = request.body;
        await connection('menu').where('id', id).del();
        return response.status(204).send();
    }
}
