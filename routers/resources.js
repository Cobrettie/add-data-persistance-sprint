const express = require('express');
const resource = require('../models/resources');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

// add a new resource
router.post('/', async (req, res) => {
  try {
    const resources = await resource.addResource(req.body)
    res.status(201).json({
      message: 'Added resource'
    })
  } catch (err) {
    logError(err)
  }
})

// get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await resource.getResources()
    res.status(201).json(resources)
  } catch (err) {
    logError(err)
  }
})

// get resource by id
router.get('/:id', async (req, res) => {
  try {
    const resource = await resource.getResourceById(req.params.id)
    res.status(200).json(resource)
  } catch (err) {
    logError(err)
  }
})

module.exports = router;