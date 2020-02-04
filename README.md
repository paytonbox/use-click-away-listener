# use-click-away-listener

> React hook to detect click away events

[![NPM](https://img.shields.io/npm/v/use-click-away-listener.svg)](https://www.npmjs.com/package/use-click-away-listener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-click-away-listener
```

## Usage

```jsx
import React from 'react'

import useClickAwayListener from 'use-click-away-listener'

const handleClickAway = () => {
  // your code here
}

const Example = () => {
  const myClickAwayRef = useClickAwayListener(handleClickAway)
  
  return (
    <div ref={myClickAwayRef}>Click Anywhere But Here</div>
  )
}
```

## License

MIT © [paytonbox](https://github.com/paytonbox)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
