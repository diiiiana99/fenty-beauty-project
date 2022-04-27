import React, {useState, useEffect}  from 'react';
import './MakeupSection.scss'
import data from '../../utils/data'
import Title from './Title'
import Media from './Media'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'



// const useMousePosition = () => {
//     const[mousePosition,setMousePosition] = React.useState ({x: 0, y: 0})

//     const updateMousePosition = event => {
//         setMousePosition({x: event.clientX, y: event.clientY})
//     }
//     useEffect(() => {
//         window.addEventListener('mousemove', updateMousePosition);

//         return () => window.removeEventListener('mousemove', updateMousePosition);
//     }, [])

//     return mousePosition
// }


function MakeupSection ()  {


       
    
 const [activeIndex,setActiveIndex] = useState(-1)
 const [products, ] = useState([])
//  const {x, y} = useMousePosition
 

   const titles= data.map(({title}, index) => (
        <Title title={title} key={title} setActiveIndex={setActiveIndex} index={index} />
    ))
    const images= data.map(({url}, index) => {
        const isActive = index === activeIndex;
        // const xPos = isActive ? x: 0;
        // const yPos = isActive ? y: 0;

        return <Media url={url} active={isActive} key={url} index={index} />
    })

    // let animatedTitle = useRef(null);

    // useEffect(()=> {
    //     timeline.from(animatedTitle,{
    //         delay: .5,
    //         duration: 1,
    //         opacity: 0,
    //         y: 100
    //     })
    
    return (
        <>
        
   
        
       
        <Fade bottom>
        <div className='about-img-container'>
      
        
        </div>
        </Fade>

        <div className='about-wrapper '>
        Best Seller
        <Fade bottom>

        <div className='about-list'>
        {titles}
  
        </div>

        </Fade>
        <div className='image-list' >
            {images} 
        </div>

  
       
        <div>

        </div>

        </div>


        </>
    );
}

export default MakeupSection;
