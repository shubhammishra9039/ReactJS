import React from 'react'

function Nav() {
    console.log("Nav Render");
  return (
    <div>
        Nav
        </div>
  )
}

export default React.memo(Nav)