
exports.up = function(knex) {
    return knex.schema.createTable('resource', tbl => {
        tbl.increments()
        tbl.text('name')
        tbl.text('description')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resource')
  
};
