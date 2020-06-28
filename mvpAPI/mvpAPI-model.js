const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProjects,
  getResources,
  getTasks
}

// Create a Project
function addProject(project) {
  return db('project').insert(project)
}



function getProjects() {
  return db('project')
}

function getResources() {
  return db('resource')
}

// retrieve all tasks 
// list of tasks NEEDS project_name and project_description
function getTasks() {
  return db('task')
}