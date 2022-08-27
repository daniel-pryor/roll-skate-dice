import React, { useState } from 'react'
import { tricks } from '../../data/tricks'

// set the state of the dice
// updates the state on the dice based on the values passed up from Trick
// has a function to update the state
// function handles empty dice value by hidding dice. eg "ollie" will just render one dice. "Frontside 180" renders 2 dice, "Switch Frontside 180" renders 3 dice.

const Dice = (props) => {
  function getRandomTrick(tricksArr) {
    const currentTrick = tricksArr[Math.floor(Math.random() * tricksArr.length)]
    return currentTrick
  }

  function handleClick() {
    let currentTricks = []
    switch (props.difficulty) {
      case 'easy':
        currentTricks = tricks.filter((trick) => trick.difficulty === 'easy')
        break
      case 'medium':
        currentTricks = tricks.filter(
          (trick) =>
            trick.difficulty === 'medium' || trick.difficulty === 'easy'
        )
        break
      case 'hard':
        currentTricks = tricks.filter(
          (trick) =>
            trick.difficulty === 'hard' ||
            trick.difficulty === 'medium' ||
            trick.difficulty === 'easy'
        )
        break
      default:
    }
    props.updateTrick(getRandomTrick(currentTricks))
  }

  return (
    <>
      <div>
        <h3>Difficulty: {props.difficulty}</h3>
        <div>
          <div>
            <p>{props.trick.dice1}</p>
          </div>
          <div>
            <p>{props.trick.dice2}</p>
          </div>
          <div>
            <p>{props.trick.dice3}</p>
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
