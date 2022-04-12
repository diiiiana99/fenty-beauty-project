import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import Fade from 'react-reveal/Fade'

import './Main.scss'




function Main() {
  return (
    <Fade top>
    <div className='tutorial-container'>
        <div className='hover-left-2'>
  
            <div className='hover-right-2'>
              <LeftContainer />
                <RightContainer/>
               
                <h1 className='center-text'> FENTY BEAUTY</h1>
            </div>
        </div>
        
      
    </div>
    </Fade>
  )
}

export default Main
