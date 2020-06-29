const db = require('../data/dbConfig');

module.exports = {
  addTask, 
  getTasks,
  getTaskById
}

// Create a Task
function addTask(task) {
  return db('task').insert(task)
}


// getTaskById
function getTaskById(id) {
  return db('task').where({ id }).first();
}

// get all tasks, with selected fields
function getTasks() {
  return db('task as t')
    .join('project as p', 'p.id', 't.project_id')
    .select(
      'p.id',
      't.task_description',
      't.task_notes',
      't.completed',
      'p.project_name',
      'p.project_description'
    )
}