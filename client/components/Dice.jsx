import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getRandomTrick } from '../helper-functions'

// set the state of the dice
// updates the state on the dice based on the values passed up from Trick
// has a function to update the state
// function handles empty dice value by hidding dice. eg "ollie" will just render one dice. "Frontside 180" renders 2 dice, "Switch Frontside 180" renders 3 dice.
const initialTrick = {
  name: '',
  dice1: 'Roll',
  dice2: 'Skate',
  dice3: 'Dice',
}

const Dice = () => {
  const allTricks = useSelector((s) => s.tricks)
  const difficulty = useSelector((s) => s.difficulty)

  const [currentTrick, setCurrentTrick] = useState(initialTrick)

  function handleClick() {
    let currentTricks = []
    switch (difficulty) {
      case 'easy':
        currentTricks = allTricks.filter((trick) => trick.difficulty === 'easy')
        break
      case 'medium':
        currentTricks = allTricks.filter(
          (trick) =>
            trick.difficulty === 'medium' || trick.difficulty === 'easy'
        )
        break
      case 'hard':
        currentTricks = allTricks.filter(
          (trick) =>
            trick.difficulty === 'hard' ||
            trick.difficulty === 'medium' ||
            trick.difficulty === 'easy'
        )
        break
      default:
    }
    return setCurrentTrick(getRandomTrick(currentTricks))
  }

  return (
    <>
      <div>
        <h3>Difficulty: {difficulty}</h3>
        <div>
          <div>
            <p>Dice 1:{currentTrick.dice1}</p>
          </div>
          <div>
            <p>Dice 2:{currentTrick.dice2}</p>
          </div>
          <div>
            <p>Dice 3:{currentTrick.dice3}</p>
          </div>
        </div>
        <div>
          <input type="button" value="Roll Dice" onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default Dice
