import React, { useState } from 'react'

const Favourites = (props) => {
  const [favs, setFavs] = useState([])
  const [showFavs, setShowFavs] = useState(false)

  function addToFavs() {
    console.log('added to favourites')
    props.trick.name !== ''
      ? setFavs([...favs, props.trick.name])
      : console.log('Please roll the dice first')
  }

  function toggleFavs() {
    setShowFavs((showFavs) => !showFavs)
  }

  return (
    <>
      <div>
        <input type="button" value="Favourite" onClick={addToFavs} />
      </div>
      <div>
        {showFavs ? (
          <input type="button" value="Hide Favourites" onClick={toggleFavs} />
        ) : (
          <input type="button" value="Show Favourites" onClick={toggleFavs} />
        )}
      </div>
      {showFavs ? (
        <div className="favs" id="favList">
          {favs.map((fav, idx) => {
            return <p key={idx}>{fav}</p>
          })}
        </div>
      ) : null}
    </>
  )
}

export default Favourites
