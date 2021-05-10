exports.up = function(knex) {
    return knex.schema.createTable('menu', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('desc').notNullable();
        table.decimal('value').notNullable();
        table.string('img').notNullable();
        table.string('rest_id').notNullable();
        table.foreign('rest_id').references('id').inTable('restaurants');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('menu');
};
