const express = require('express');
const projectsModel = require('../models/projects');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

// add a new project
router.post('/', (req, res) => {
  projectsModel.addProject(req.body)
    .then(() => {
      res.status(201).json({
        message: 'Added project'
      })
    })
    .catch(err => logError(err))
})

// get all projects
router.get('/', (req, res) => {
  projectsModel.getProjects()
    .then(projects => {
      res.status(201).json(projects)
    })
    .catch(err => logError(err))
})

// get project by id
router.get('/:id', (req, res) => {
  projectsModel.getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => logError(err))
})

module.exports = router;