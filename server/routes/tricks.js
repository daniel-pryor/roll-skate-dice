const express = require('express')

// eslint-disable-next-line no-unused-vars
const { getAllTricks, getFavouritesByUserId } = require('../db/tricks')

const router = express.Router()

//GET /v1/tricks
router.get('/', (req, res) => {
  getAllTricks()
    .then((tricks) => {
      res.json(tricks)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id/favourites', (req, res) => {
  const id = req.params.id
  getFavouritesByUserId(id)
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
