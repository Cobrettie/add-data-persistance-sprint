const express = require('express');
const mvpAPIModel = require('./mvpAPI-model');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hey from mvpAPI router"
  })
})

//// PROJECT ////

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

// get all projects
router.get('/projects', (req, res) => {
  mvpAPIModel.getProjects()
    .then(projects => {
      res.status(201).json(projects)
    })
    .catch(err => logError(err))
})

// get project by id
router.get('/projects/:id', (req, res) => {
  mvpAPIModel.getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => logError(err))
})


//// RESOURCE ////

// add a new resource
router.post('/resources', (req, res) => {
  mvpAPIModel.addResource(req.body)
    .then(() => {
      res.status(201).json({
        message: 'Added resource'
      })
    })
    .catch(err => logError(err))
})

// get all resources
router.get('/resources', (req, res) => {
  mvpAPIModel.getResources()
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(err => logError(err))
})


//// TASK ////

// add a new task
router.post('/tasks', (req, res) => {
  mvpAPIModel.addTask(task)
    .then(() => {
      res.status(201).json({
        message: 'Added task'
      })
    })
    .catch(err => logError(err))
})

// get all tasks
router.get('/tasks', (req, res) => {
  mvpAPIModel.getTasks()
    .then(tasks => {
      res.status(201).json(tasks)
    })
    .catch(err => logError(err))
})

module.exports = router;