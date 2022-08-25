import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'

import Play from './Play'

const App = () => {
  return (
    <>
      <h1>React App</h1>
      <Play />
    </>
  )
}
export default App
