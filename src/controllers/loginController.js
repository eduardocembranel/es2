const connection = require('../database/connection');

module.exports = {
    async login(request, response) {
        const { email, pass } = request.body;
        var user = await connection('users')
                .where('email', email)
                .andWhere('pass', pass)
                .select('*').first();
        var rest = await connection('restaurants')
                .where('email', email)
                .andWhere('pass', pass)
                .select('*').first();

        if (user && user.id != -1) {
            response.cookie('id', user.id);
            response.cookie('user', 1);
            return response.send({status: 'success', user: '1'});
        } else if (rest && rest.id != -1) {
            response.cookie('id', rest.id);
            response.cookie('user', 2);
            return response.send({status: 'success', user: '2'});
        }
        return response.send({status: 'error', user: '0'});
    },

    async logout(request, response) {
        response.clearCookie("id");
        response.clearCookie("user");
        response.redirect('/');
    }
}
