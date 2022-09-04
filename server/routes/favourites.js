const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

//GET favourites by userid
router.get('/:id/favourites', (req, res) => {
  const id = req.params.id
  db.getFavouritesByUserId(id)
    .then((response) => {
      console.log(response)
      res.json(response)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
