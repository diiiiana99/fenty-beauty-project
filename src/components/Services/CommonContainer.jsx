import React, {useState} from 'react'
import cn from 'classnames'
import { imageData  } from "../../utils/mediaData.js";


function CommonContainer ({mediaData, position, title, render}) {
const[first] = mediaData;
const[activeMedia,setActiveMedia] = useState(first);

console.log(imageData)

  return (
   <>
   <div className={`navigation ${position}`}>
       <h2 className='video-container'>{title}</h2>
       <ul  >
           {mediaData.map((media, index) => (
            <li
            key={index}
            className={cn({active: media.mediaUrl===activeMedia.mediaUrl})}
            onMouseEnter={() =>{
                setActiveMedia(media);
            }}
            onMouseLeave={() => {}}
            >
            {media.title}
            </li>
           ))}
       </ul>

   </div>
   {render(activeMedia)}
   
   </>
  )
}

export default CommonContainer;
