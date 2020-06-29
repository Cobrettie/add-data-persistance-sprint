const express = require('express');
const projectsModel = require('../models/projects');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

// add a new project
router.post('/', async (req, res) => {
  try {
    await projectsModel.addProject(req.body)
    res.status(201).json({
      message: 'Added project'
    })
  } catch (err) {
    logError(err)
  }
})

// get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await projectsModel.getProjects()
    res.status(201).json(projects)
  } catch (err) {
    logError(err)
  }
})

// get project by id
router.get('/:id', async (req, res) => {
  try {
    const project = await projectsModel.getProjectById(req.params.id)
    res.status(200).json(project)
  } catch (err) {
    logError(err)
  }
})

// get project resources
router.get('/:id/resources', async (req, res) => {
  try {
    const projectResources = await projectsModel.getProjectResources(req.params.id)
    res.status(200).json(projectResources)
  } catch (err) {
    logError(err)
  }
})

// get project tasks
router.get('/:id/tasks', async (req, res) => {
  try {
    const tasks = await projectsModel.getProjectTasks(req.params.id);
    res.status(200).json(tasks)
  } catch (err) {
    logError(err)
  }
})

module.exports = router;