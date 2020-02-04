import React from 'react'
import { useMyHook } from 'use-click-away-listener'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App