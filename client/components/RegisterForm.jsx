import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../api/user.api'
import { updateLoggedInUser } from '../actions/loggedInUser'

import { Error } from './Styled'

export default function RegisterForm() {
  const user = useSelector((s) => s.loggedInUser)
  console.log('state:', user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
    name: '',
    location: '',
    ability: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/play')
  }, [user])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      ...form,
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))

    navigate('/play')
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Complete profile setup</h2>
      {errorMsg && <Error onClick={hideError}>Error:: {errorMsg}</Error>}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <label htmlFor="ability">Ability: </label>
        <select
          name="ability"
          id="ability"
          // defaultValue="medium"
          value={form.ability}
          onChange={handleChange}
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
          Save Profile
        </button>
      </form>
    </>
  )
}
