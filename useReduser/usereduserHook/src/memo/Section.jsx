import React from 'react'

function Section({counter}) {
    console.log("Section render");
  return (
    <div>Secttin
        {counter}</div>
  )
}

export default React.memo(Section)