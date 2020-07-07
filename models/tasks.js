const db = require('../data/dbConfig');

module.exports = {
  addTask, 
  getAllTasks,
  getTasks,
  getTaskById
}

// Create a Task
function addTask(task) {
  return db('task').insert(task)
}

// get ALL tasks
function getAllTasks() {
  return db('task')
}

// getTaskById
function getTaskById(id) {
  return db('task').where({ id }).first();
}

// get all tasks, with selected fields
// rendering duplicate data in SQL.. need to solve why ////////////////////////

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


// return db('task as t')
//     .join('project as p')
//     .select(
//       't.id',
//       't.task_description',
//       't.task_notes',
//       't.project_id',
//       'p.project_name',
//       'p.project_description'
//     )
//     .where('t.id', 't.project_id')
//