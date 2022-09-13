import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateUser } from '../api'
import { updateLoggedInUser } from '../actions/loggedInUser'

import { Error } from './Styled'

export default function EditProfile() {
  const user = useSelector((s) => s.loggedInUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: user.username,
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
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))

    navigate('/play/profile')
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Update profile info</h2>
      {errorMsg && <Error onClick={hideError}>Error:: {errorMsg}</Error>}
      <form action="" onSubmit={handleUpdate}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleEditChange}
        />
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
          // defaultValue="medium"
          value={form.ability}
          onChange={handleEditChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button
          disabled={
            !(form.username && form.name && form.location && form.ability)
          }
        >
          Save
        </button>
      </form>
    </>
  )
}
