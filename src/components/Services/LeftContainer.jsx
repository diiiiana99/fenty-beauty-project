import React from 'react'
import CommonContainer from './CommonContainer'
import ImagePlayer from './ImagePlayer'
import { imageData } from "../../utils/mediaData";

console.log(imageData)
function LeftContainer() {


return (
   <CommonContainer
   mediaData={imageData}
   position="left"
  //  title="Finished Look"

   render={(media) => (
    <div className='contain contain-left'>
        <ImagePlayer src={media.mediaUrl}/>
        <h1 className='container-big-title'>{media.title}</h1>
    </div>
   )}
   
   
   />
  )
}

export default LeftContainer
