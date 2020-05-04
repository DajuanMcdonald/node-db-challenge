
exports.up = function(knex) {
    return knex.schema.createTable('resource', tbl => {
        tbl.increments()
        tbl.text('name')
        tbl.text('description')
    })

    .createTable('project', tbl => {
        tbl.increments()
        tbl.text('name').notNullable()
        tbl.text('description')
        tbl.boolean('completed').notNullable()
    })
  
    .createTable('task', tbl => {
        tbl.increments()
        tbl.text('description')
        tbl.text('notes')
        tbl.boolean('completed').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
    .dropTableIfExists('task')
  
};
