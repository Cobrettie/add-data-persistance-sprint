const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProjects,
  getProjectById
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
