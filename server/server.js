const path = require('path')
const express = require('express')

const users = require('./routes/users')
const tricks = require('./routes/tricks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', users)
server.use('/api/v1/tricks', tricks)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
