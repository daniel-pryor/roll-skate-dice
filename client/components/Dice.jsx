import React, { useState } from 'react'
import Trick from './Trick'

// set the state of the dice
// updates the state on the dice based on the values passed up from Trick
// has a function to update the state
// function handles empty dice value by hidding dice. eg "ollie" will just render one dice. "Frontside 180" renders 2 dice, "Switch Frontside 180" renders 3 dice.

const initialTrick = {
  id: 0,
  name: '',
  dice1: 'Roll',
  dice2: 'Skate',
  dice3: 'Dice',
  description: '',
  category: '',
}

const Dice = () => {
  const [trick, setTrick] = useState(initialTrick)

  function updateDice(e, trick) {
    console.log('called')
    setTrick(trick)
  }

  return (
    <>
      <div>
        <h3>Dice</h3>
        <div>
          <div>
            <p>{trick.dice1}</p>
          </div>
          <div>
            <p>{trick.dice2}</p>
          </div>
          <div>
            <p>{trick.dice3}</p>
          </div>
        </div>

        <Trick updateDice={updateDice} />
      </div>
    </>
  )
}

export default Dice
