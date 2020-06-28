
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1, 
          project_name: '',
          project_description: '',
          completed: false
        },
        {
          id: 2, 
          project_name: '',
          project_description: '',
          completed: false
        },
        {
          id: 3, 
          project_name: '',
          project_description: '',
          completed: false
        },
      ]);
    });
};
