import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Home from './Home'
import Favourites from './Favourites'
import Menu from './Menu'
import Play from './Play'

import { fetchTricks, getDifficulty } from '../actions'

const App = () => {
  /// Set state for difficulty
  const [difficulty, setDifficulty] = useState('medium')
  const dispatch = useDispatch()
  // useeffect dispatch thunk

  useEffect(() => {
    dispatch(fetchTricks())
    dispatch(getDifficulty())
  }, [])

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
