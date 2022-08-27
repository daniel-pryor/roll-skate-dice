import React from 'react'

const Menu = (props) => {
  function handleDifficultyChange(e) {
    const difficulty = e.target.value
    props.updateDifficulty(difficulty)
  }

  return (
    <>
      <div>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleDifficultyChange}
          defaultValue={'medium'}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </>
  )
}

export default Menu
