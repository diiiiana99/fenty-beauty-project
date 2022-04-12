import React from 'react'
import { imageData  } from "../../utils/mediaData.js";

console.log(imageData)
function ImagePlayer({src}) {



  return (
    <div className='image-player' style={{backgroundImage: `url(${src})`} }>
        
    </div>
  )
}

export default ImagePlayer
