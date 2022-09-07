import React from 'react'
import { useSelector } from 'react-redux'

function WaitIndicator() {
  const showIndicator = useSelector((state) => {
    state.waiting
  })

  return showIndicator ? <img src="/loadinggif.gif" alt="" /> : null
}

export default WaitIndicator
