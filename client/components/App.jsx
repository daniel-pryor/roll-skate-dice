import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Favourites from './Favourites'
import Menu from './Menu'
import Play from './Play'

const App = () => {
  /// Set state for difficulty
  const [difficulty, setDifficulty] = useState('medium')

  // useeffect dispatch thunk

  function updateDifficulty(difficulty) {
    setDifficulty(difficulty)
  }
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play" element={<Play difficulty={difficulty} />} />
          <Route
            path="/play/menu"
            element={
              <Menu
                updateDifficulty={updateDifficulty}
                difficulty={difficulty}
              />
            }
          />
          <Route path="/play/menu/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </>
  )
}
export default App
