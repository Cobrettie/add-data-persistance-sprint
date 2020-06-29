const express = require('express');
const tasks = require('../models/tasks');

const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

// add a new task
router.post('/', async (req, res) => {
  try {
    const task = await tasks.addTask(req.body)
    res.status(201).json(task)
  } catch (err) {
    logError(err)
  }
})

// get all tasks
router.get('/', (req, res) => {
  tasks.getTasks()
    .then(tasks => {
      res.status(201).json(tasks)
    })
    .catch(err => logError(err))
})

// get project task

// get task by id
router.get('/:id', (req, res) => {
  tasks.getTaskById(req.params.id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => logError(err))
})

module.exports = router;