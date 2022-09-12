import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'

export default function Login() {
  const user = useSelector((s) => s.loggedInUser)
  const { loginWithRedirect, logout } = useAuth0()

  const handleLogoff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Link to={'/play'} onClick={handleLogoff}>
          Log off
        </Link>
        <p>{' ' + user.username}</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to="/register" onClick={handleSignIn}>
          Sign In
        </Link>
      </IfNotAuthenticated>
    </>
  )
}
