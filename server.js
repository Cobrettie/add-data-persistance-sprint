const express = require('express');
const projects = require('./routers/projects');
const resources = require('./routers/resources');
const tasks = require('./routers/tasks');

const server = express();

server.use(express.json());
server.use('/api/projects', projects);
server.use('/api/resources', resources);
server.use('/api/tasks', tasks)

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Sprint Challenge server running"
  })
})

module.exports = server;