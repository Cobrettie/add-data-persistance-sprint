const db = require('../data/dbConfig.js');

module.exports = {
  addResource,
  getResources,
  getResourceById
}

// Create a Resource
function addResource(resource) {
  return db('resource').insert(resource)
}

// Get all Resources
function getResources() {
  return db('resource')
}

// Get resource by id
function getResourceById(id) {
  return db('resource').where({ id }).first();
}