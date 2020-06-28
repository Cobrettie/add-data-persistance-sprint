
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          id: 1, 
          task_description: 'rowValue1',
          task_notes: '',
          completed: false,
          project_id: 1
        },
        {
          id: 2, 
          task_description: 'rowValue2',
          task_notes: 'task notes 2',
          completed: false,
          project_id: 2
        },
        {
          id: 3, 
          task_description: 'rowValue3',
          task_notes: 'note sfre 3',
          completed: false,
          project_id: 3
        },
        {
          id: 4, 
          task_description: 'rowValue4',
          task_notes: 'number 4',
          completed: false,
          project_id: 1
        }
      ]);
    });
};
