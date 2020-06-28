
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1, 
          project_name: 'test1',
          project_description: 'tester1',
          completed: false
        },
        {
          id: 2, 
          project_name: 'tester2',
          project_description: 'tester2',
          completed: false
        },
        {
          id: 3, 
          project_name: 'tester33',
          project_description: 'tester33',
          completed: false
        },
      ]);
    });
};
