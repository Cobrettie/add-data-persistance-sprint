const db = require('../data/dbConfig.js');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  getProjectResources
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

// Get project resources
function getProjectResources(id) {
  return db('r.id', 'r.resource_name', 'r.resource_description', 'r.project_id')
    .from('resource as r')
    .where('r.project_id', id)
}
