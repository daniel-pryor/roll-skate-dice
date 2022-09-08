import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateDifficulty } from '../actions'

const Menu = () => {
  const dispatch = useDispatch()
  const difficulty = useSelector((s) => s.difficulty)

  return (
    <>
      <div>Sign in</div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={(e) => dispatch(updateDifficulty(e.target.value))}
          defaultValue={difficulty}
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
