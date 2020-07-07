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
router.get('/', async (req, res) => {
  try {
    const allTasks = await tasks.getTasks()
    res.status(201).json(allTasks)
  } catch (err) {
    logError(err)
  }
})

// get task by id
router.get('/:id', async (req, res) => {
  try {
  const task = await tasks.getTaskById(req.params.id)
    res.status(200).json(task)
  } catch (err) {
    logError(err)
  }
})

module.exports = router;