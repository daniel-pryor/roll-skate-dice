import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  function handleDifficultyChange(e) {
    const difficulty = e.target.value
    props.updateDifficulty(difficulty)
  }

  return (
    <>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleDifficultyChange}
          defaultValue={props.difficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <Link to={'/play/menu/favourites'}>Favourites</Link>
      </div>
      <div>
        <Link to={'/play'}>Close Menu</Link>
      </div>
    </>
  )
}

export default Menu
