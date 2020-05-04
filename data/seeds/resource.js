
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Computer',description: 'Dell'},
        {name: 'rowValue2', description: 'HP'},
        {name: 'rowValue3', description: 'Mac'}
      ]);
    });
};
