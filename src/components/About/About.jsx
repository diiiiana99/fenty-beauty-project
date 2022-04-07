import React, {useState}  from 'react';
import './About.scss'
import data from '../../utils/data'
import Title from './Title'
import Media from './Media'
import Fade from 'react-reveal/Fade'






function About ()  {

  
       
    
 const [activeIndex,setActiveIndex] = useState(-1)


   const titles= data.map(({title}, index) => (
        <Title title={title} key={title} setActiveIndex={setActiveIndex} index={index} />
    ))
    const images= data.map(({url}, index) => {
        const isActive = index === activeIndex;

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
        <div className='page-wrapper'>
        <Fade top></Fade>
        <div className='project-list'>
        {titles}
        </div>
        <div className='image-list' >
            {images} 
        </div>
   
        </div>
    );
}

export default About;
