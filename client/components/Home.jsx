import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <h2>Skate Dice</h2>
      </div>
      <div>
        <Link to={'/play'}>Play</Link>
      </div>
    </>
  )
}

export default Home
