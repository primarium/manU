exports.up = function (knex, Promise) {
    return knex.schema.createTable('spaces', function (table) {
        table.increments(); // set up Primary Key ID field
        table.string('name');
        table.integer('diskquota_mb');
        table.integer('memoryquota_mb');
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('spaces')
}