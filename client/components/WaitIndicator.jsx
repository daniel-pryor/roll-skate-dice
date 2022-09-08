import React from 'react'
import { useSelector } from 'react-redux'

const style = {
  height: '200px',
  width: '200px',
  display: 'block',
}

function WaitIndicator() {
  const showIndicator = useSelector((state) => {
    state.waiting
  })

  return showIndicator ? (
    <img src="./images/loadinggif.gif" alt="" style={style} />
  ) : null
}

export default WaitIndicator
