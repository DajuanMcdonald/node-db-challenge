
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {description: 'rowValue1', notes: '', completed: false},
        {description: 'rowValue2', notes: '', completed: false},
        {description: 'rowValue3', notes:'', completed: false}
      ]);
    });
};
