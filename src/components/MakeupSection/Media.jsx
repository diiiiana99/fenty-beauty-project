import React from 'react'

function Media({url, active}) {
  return (
    <img
        className={active && "is-active"} src={url} alt=''
    />
        
 
  )
}

export default Media

