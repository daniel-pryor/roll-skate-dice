import React, { useState } from 'react'
import Dice from './Dice'
import Favourites from './Favourites'

import Menu from './Menu'

const Play = () => {
  const [difficulty, setDifficulty] = useState('medium')
  const [trick, setTrick] = useState({
    name: '',
    dice1: 'Roll',
    dice2: 'Skate',
    dice3: 'Dice',
  })

  function updateTrick(trick) {
    setTrick(trick)
  }

  function updateDifficulty(difficulty) {
    setDifficulty(difficulty)
  }
  return (
    <>
      <h2>Roll Dice to Play</h2>
      <Dice difficulty={difficulty} trick={trick} updateTrick={updateTrick} />
      <Menu updateDifficulty={updateDifficulty} />
      <Favourites trick={trick} />
    </>
  )
}

export default Play
