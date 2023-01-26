import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { updateUser } from '../api/user.api'
import { updateLoggedInUser } from '../actions/loggedInUser'

import { Error } from './Styled'

export default function EditProfile() {
  const user = useSelector((s) => s.loggedInUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // change
  const [form, setForm] = useState({
    name: user.name,
    location: user.location,
    ability: user.ability,
  })
  const [errorMsg, setErrorMsg] = useState('')

  function handleEditChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleUpdate(e) {
    e.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      ...form,
    }

    /// pass auth0_id
    updateUser(userInfo, user.token)
      .then(() => {
        navigate('/play/profile')
        dispatch(updateLoggedInUser(userInfo))
      })
      .catch((err) => {
        setErrorMsg(err.message)
      })
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Update profile info</h2>
      {errorMsg && <Error onClick={hideError}>Error:: {errorMsg}</Error>}
      <form action="" onSubmit={handleUpdate}>
        <div>{user.username}</div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleEditChange}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleEditChange}
        />
        <label htmlFor="ability">Ability: </label>
        <select
          name="ability"
          id="ability"
          value={form.ability}
          onChange={handleEditChange}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Pro">Pro</option>
        </select>
        <button disabled={!(form.name && form.ability)}>Save</button>
        <Link to={'/play/profile'}>Cancel</Link>
      </form>
    </>
  )
}
