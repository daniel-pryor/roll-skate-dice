import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Profile() {
  const user = useSelector((s) => s.loggedInUser)

  return (
    <>
      <Link to={'/play/menu'}>Back</Link>
      <div>Username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Location: {user.location}</div>
      <div>Ability: {user.ability}</div>
      <Link to={'/play/profile/edit'}>Edit</Link>
    </>
  )
}
