import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './Home'
import Favourites from './Favourites'
import Menu from './Menu'
import Play from './Play'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Register from './Register'

import { fetchTricks } from '../actions/tricks'
import { getDifficulty } from '../actions/difficulty'
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api/user.api'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  useCacheUser()
  /// Set state for difficulty
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useeffect dispatch thunk
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    dispatch(fetchTricks())
    dispatch(getDifficulty())
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          console.log('userInDb', userInDb)
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play" element={<Play />} />
          <Route path="/play/menu" element={<Menu />} />
          <Route path="/play/menu/favourites" element={<Favourites />} />
          <Route path="/play/profile" element={<Profile />} />
          <Route path="/play/profile/edit" element={<EditProfile />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}
export default App
