
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'rowValue1', description: 'Short on one side', completed: false},
        {name: 'rowValue2', description: 'Too much noise in background', completed: false},
        {name: 'rowValue3', description: 'Third Floor', completed: false}
      ]);
    });
};
