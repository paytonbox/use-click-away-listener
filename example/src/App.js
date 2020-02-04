import React from 'react'
import useClickAwayListener from 'use-click-away-listener'

const App = () => {
  const handleClickAway = () => alert('Click detected outside element')

  // pass your callback, returns ref for element to watch
  // when a click is detected outside of the element, your callback will be executed
  const ref = useClickAwayListener(handleClickAway)

  return (
    <div className='container'>
      <div className='card' ref={ref}>
        Click Anywhere But Here
      </div>
    </div>
  )
}
export default App
