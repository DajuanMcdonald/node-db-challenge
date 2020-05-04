
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Computer',description: 'Dell'},
        {name: 'rowValue2', description: 'HP'},
        {name: 'rowValue3', description: 'Mac'}
      ]);
    });
};
