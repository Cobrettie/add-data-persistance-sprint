const express = require('express');
const mvpAPI = require('./mvpAPI/mvpAPI');

const server = express();

server.use(express.json());
server.use('/api', mvpAPI);

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Sprint Challenge server running"
  })
})

module.exports = server;