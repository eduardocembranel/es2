exports.up = function(knex) {
    return knex.schema.createTable('restaurants', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('dt').notNullable();
        table.string('cnpj').notNullable();
        table.string('city').notNullable();
        table.string('street').notNullable();
        table.string('number').notNullable();
        table.string('uf', 2).notNullable();
        table.string('email').notNullable();
        table.string('pass').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('restaurant');
};
