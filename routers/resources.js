const express = require('express');
const resource = require('../models/resources');
const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

// add a new resource
router.post('/', (req, res) => {
  resource.addResource(req.body)
    .then(() => {
      res.status(201).json({
        message: 'Added resource'
      })
    })
    .catch(err => logError(err))
})

// get all resources
router.get('/', (req, res) => {
  resource.getResources()
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(err => logError(err))
})

// get resource by id
router.get('/:id', (req, res) => {
  resource.getResourceById(req.params.id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => logError(err))
})

module.exports = router;