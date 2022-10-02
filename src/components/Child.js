import React from 'react'
// rafce
const Child = ({inp,declencher}) => {

  return (
    <>
        <div>compenent enfant {inp}</div>
        <button onClick={() => declencher()}>clicker</button>
    </>
  )
}

export default Child