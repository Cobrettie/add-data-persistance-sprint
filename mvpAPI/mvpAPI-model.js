const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  addResource,
  getResources,
  addTask,
  getTasks
}


// PROJECT

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


// RESOURCE

// Create a Resource
function addResource(resource) {
  return db('resource').insert(resource)
}

// Get all Resources
function getResources() {
  return db('resource')
}


// TASK

// Create a Task
function addTask(task) {
  return db('task').insert(task)
}

// Get all Tasks 
// list of tasks NEEDS project_name and project_description
function getTasks() {
  return db('task')
}