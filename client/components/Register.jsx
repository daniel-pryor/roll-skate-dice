import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'

export default function Register({ waitBeforeShow = 500 }) {
  // const user = useSelector((s) => s.loggedInUser)
  // const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [waitBeforeShow])

  return <>{isShown ? <RegisterForm /> : null}</>
}
