const connection = require('../database/connection');
const validade = require('./validate');

module.exports = {
    async index (request, response) {
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response) {
        const { 
            name, dt, cpf, city, street, number, uf, email, pass, pass2
        } = request.body;

        const msg = validade.valCreateUser(name, dt, cpf, city, 
            street, number, uf, email, pass, pass2);  
        if (msg != 'ok') 
            return response.json({ id: -1, msg: msg });

        try {
            const [id] = await connection('users').insert({
                name, dt, cpf, city, street, number, uf, email, pass
            });
            return response.json({ id: id, msg: 'ok' });
        } catch(e) {
            return response.json({ id: -1, msg: 'E-mail ja cadastrado!' });
        }
    },

    async update(request, response) {
        const { 
            name, dt, cpf, city, street, number, uf, email, pass, pass2
        } = request.body;

        if (pass == '') {
            var data = {
                name: name,
                dt: dt,
                cpf: cpf,
                city: city,
                street: street,
                number: number,
                uf: uf,
            };
        } else {
            var data = {
                name: name,
                dt: dt,
                cpf: cpf,
                city: city,
                street: street,
                number: number,
                uf: uf,
                pass: pass
            };
        }
        await connection('users').where('email', email).update(data);

        return response.json({status: 'success', msg: 'ok'});
    },

    async query(request, response) {
        const id = request.cookies.id;
        if (!id) {
            return response.json({ id: -1 });
        }
        const user = await connection('users').where('id', id).select('*')
            .first();

        var typeUser = request.cookies.user;
        if (!typeUser) typeUser = 0;

        return response.render('perfilUser', {prof: user, user: typeUser});
    },
}
