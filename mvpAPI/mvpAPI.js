const express = require('express');
const mvpAPIModel = require('./mvpAPI-model');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hey from mvpAPI"
  })
})

// add a new project
router.post('/projects', (req, res) => {
  mvpAPIModel.addProject(req.body)
    .then(() => {
      res.status(201).json({
        message: 'Added project'
      })
    })
    .catch(err => logError(err))
})

// retrieve all projects
router.get('/projects', (req, res) => {
  mvpAPIModel.getProjects()
    .then(projects => {
      res.status(201).json(projects)
    })
    .catch(err => logError(err))
})

// retrieve all resources
router.get('/resources', (req, res) => {
  mvpAPIModel.getResources()
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(err => logError(err))
})

// retrieve all tasks
router.get('/tasks', (req, res) => {
  mvpAPIModel.getTasks()
    .then(tasks => {
      res.status(201).json(tasks)
    })
    .catch(err => logError(err))
})

module.exports = router;