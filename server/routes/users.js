const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

//GET /v1/users
router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      console.log(users)
      res.json(users)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUserById(id)
    .then((user) => {
      console.log(user)
      res.json(user)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
