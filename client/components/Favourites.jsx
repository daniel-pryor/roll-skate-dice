import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Favourites = (props) => {
  const [favs, setFavs] = useState([])

  // function addToFavs() {
  //   console.log('added to favourites')
  //   props.trick.name !== ''
  //     ? setFavs([...favs, props.trick.name])
  //     : console.log('Please roll the dice first')
  // }

  // function toggleFavs() {
  //   setShowFavs((showFavs) => !showFavs)
  // }

  return (
    <>
      <div className="favs" id="favList">
        {favs.map((fav, idx) => {
          return <p key={idx}>{fav}</p>
        })}
      </div>
      <div>
        <Link to={'/play/menu'}>Close Favourites</Link>
      </div>
    </>
  )
}

export default Favourites
