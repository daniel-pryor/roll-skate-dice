import React, { useState } from 'react'
import Dice from './Dice'
import Top from './Top'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

import { Link } from 'react-router-dom'

const Play = (props) => {
  const [favs, setFavs] = useState([])
  const [trick, setTrick] = useState({
    name: '',
    dice1: 'Roll',
    dice2: 'Skate',
    dice3: 'Dice',
  })

  // use selector looks out for loading or error or data and display using ternary
  //{state.loading ? <Loading/> : <ActualContent/>}

  function updateTrick(trick) {
    setTrick(trick)
  }

  function addToFavs(trick) {
    setFavs([...favs, trick])
  }
  return (
    <>
      <Top />
      <ErrorMessage />
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

      {/* If user display favourites button */}
      {/* <Favourites trick={trick} /> */}
    </>
  )
}

export default Play
