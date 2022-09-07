import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="main">
        <div>
          <h1>roll</h1>
          <h2>skate dice</h2>
        </div>
        <div className="home-dice">
          <img src="./images/black-dice.png" alt="Black dice" />
        </div>
        <div className="play-button">
          <Link to={'/play'}>Play</Link>
        </div>
      </div>
    </>
  )
}

export default Home
