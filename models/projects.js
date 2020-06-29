const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  getProjectResources,
  getProjectTasks
}

// Create a Project
function addProject(project) {
  return db('project').insert(project)
}

// Get all Projects
function getProjects() {
  return db('project')
}

// Get project by id
function getProjectById(id) {
  return db('project').where({ id }).first();
}


//// STRETCH METHODS ////

// Get project resources
function getProjectResources(id) {
  return db('resource').where('resource.project_id', id)
}

// Get project tasks
function getProjectTasks(id) {
  return db('task').where('task.project_id', id)
}
