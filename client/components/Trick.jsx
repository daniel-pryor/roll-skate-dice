import React, { useState } from 'react'

import { tricks } from '../../data/tricks'

// Gets all tricks and
// returns one trick based on a random number

// TODO -
// import tricks
// generate random number based on length of tricks array
// get trick based on random number
// passes values to dice to render

// trick difficulty button changes the state of 'difficulty'
// get tricks from one file based on the state of 'difficulty' using trick.category/difficulty

// add state for favourite tricks and push to array on click if doesn't exist

const Trick = (props) => {
  const [favourites, setFavourites] = useState({})

  let currentTrick = {}
  function getRandomTrick(tricksArr) {
    currentTrick = tricksArr[Math.floor(Math.random() * tricksArr.length)]
    return currentTrick
  }

  return (
    <>
      <div>
        <input
          type="button"
          value="Roll Dice"
          onClick={(e) => props.updateDice(e, getRandomTrick(tricks))}
        />
      </div>
      <div>
        <input
          type="button"
          value="Favourite"
          onClick={() => console.log('add to favourites')}
        />
      </div>
    </>
  )
}

export default Trick
