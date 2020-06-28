
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {
          id: 1, 
          resource_name: 'rowValue1',
          project_id: 1
        },
        {
          id: 2, 
          resource_name: 'rowValue2',
          project_id: 2
        },
        {
          id: 3, 
          resource_name: 'rowValue3',
          project_id: 3
        },
        {
          id: 4, 
          resource_name: 'rowValue4',
          resource_description: '',
          project_id: 1
        },
      ]);
    });
};
