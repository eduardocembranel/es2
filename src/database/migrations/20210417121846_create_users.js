exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('dt').notNullable();
        table.string('cpf').notNullable();
        table.string('city').notNullable();
        table.string('street').notNullable();
        table.string('number').notNullable();
        table.string('uf', 2).notNullable();
        table.string('email').unique();
        table.string('pass').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
