import React from 'react'
import CommonContainer from './CommonContainer'
import VideoPlayer from './VideoPlayer'
import {  videoData } from "../../utils/mediaData";


function RightContainer() {
  return (
   <CommonContainer
   mediaData={videoData}
   position="right"
  //  title="Make Up "

   render={(media) => (
    <div className='contain contain-right'>
        <VideoPlayer src={media.mediaUrl}/>
        <h1 className='container-big-title'>{media.title}</h1>
    </div>
   )}
   
   
   />
  )
}

export default RightContainer;
