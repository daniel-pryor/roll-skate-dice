const express = require('express')
const checkJwt = require('../auth0')

const db = require('../db/users')
const router = express.Router()

//GET /v1/users
router.get('/singleuser', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub

  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => {
        console.error(err.message)
        res.status(500).send(err.message)
      })
  }
})

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => res.json({ users }))
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

router.post('/singleuser', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { username, name, location, ability } = req.body
  const userDetails = {
    auth0_id,
    username,
    name,
    location,
    ability,
  }

  db.userExists(username)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.createUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

router.put('/singleuser', checkJwt, (req, res) => {
  console.log(req.body)
  const auth0_id = req.user?.sub
  const { username, name, location, ability } = req.body
  const userDetails = {
    username,
    name,
    location,
    ability,
  }
  db.userExists(username)
    .then((usernameTaken) => {
      console.log(usernameTaken)
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.updateUser(auth0_id, userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

// //GET favourites by userid
// router.get('/:id/favourites', checkJwt, (req, res) => {
//   const id = req.params.id
//   db.getFavouritesByUserId(id)
//     .then((response) => {
//       console.log(response)
//       res.json(response)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })
// //GET /v1/users/id
// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   db.getUserById(id)
//     .then((user) => {
//       console.log(user)
//       res.json(user)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })

module.exports = router
