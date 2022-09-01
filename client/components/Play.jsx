import React, { useState } from 'react'
import Dice from './Dice'
import Favourites from './Favourites'
import { Link } from 'react-router-dom'

import Menu from './Menu'

const Play = (props) => {
  const [favs, setFavs] = useState([])
  const [trick, setTrick] = useState({
    name: '',
    dice1: 'Roll',
    dice2: 'Skate',
    dice3: 'Dice',
  })

  function updateTrick(trick) {
    setTrick(trick)
  }

  function addToFavs(trick) {
    setFavs([...favs, trick])
  }
  return (
    <>
      <h2>Roll Dice to Play</h2>
      <Dice
        difficulty={props.difficulty}
        trick={trick}
        updateTrick={updateTrick}
      />
      {trick.name && (
        // Post request to insert trick to favourites database
        <div>
          <input type="button" value="Add to Favourites" onClick={addToFavs} />
        </div>
      )}

      <Link to={'/play/menu'}>Menu</Link>

      {/* <Menu updateDifficulty={updateDifficulty} /> */}
      {/* <Favourites trick={trick} /> */}
    </>
  )
}

export default Play
