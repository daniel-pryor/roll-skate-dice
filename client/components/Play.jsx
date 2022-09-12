import React from 'react'
import Dice from './Dice'
import Top from './Top'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Play = () => {
  const isloading = useSelector((s) => s.waiting)
  const allTricks = useSelector((s) => s.tricks)
  const errorMessage = useSelector((s) => s.errorMessage)
  const user = useSelector((s) => s.loggedInUser)
  console.log(user)
  // use selector looks out for loading or error or data and display using ternary
  //{state.loading ? <Loading/> : <ActualContent/>}

  return (
    <>
      <div>
        <p>{user.username}</p>
        <Top />
        {isloading ? <WaitIndicator /> : null}
        {errorMessage ? <ErrorMessage /> : null}
        {allTricks ? (
          <div>
            <Dice />
            <Link to={'/play/menu'}>Menu</Link>
          </div>
        ) : (
          console.log('no tricks')
        )}
      </div>

      {/* {trick.name && (
        // Post request to insert trick to favourites database
        <div>
          <input type="button" value="Add to Favourites" onClick={addToFavs} />
        </div>
      )} */}

      {/* <Menu updateDifficulty={updateDifficulty} /> */}

      {/* If user display favourites button */}
      {/* <Favourites trick={trick} /> */}
    </>
  )
}

export default Play
