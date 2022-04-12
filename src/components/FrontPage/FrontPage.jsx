import React from "react";
// import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import { photos } from "../../utils/datas.js";


import "./frontpage.scss";

function FrontPage  () {


  // .navbar {
  //   display: flex;
  //   justify-content: space-between;
  
  //   padding: 50px 0;
  //   font-size: 24px;
  
  //   letter-spacing: 1px;
  //   font-family: "Syncopate", sans-serif;
  //   color: #464646;
  //   font-weight: 600;
  //   text-transform: uppercase;
  // }

  return (
    <div className=''>
      {/* <div className="head">
        <Fade bottom>
        <Link to='/'>
        FENTYBEAUTY
        </Link>
        </Fade>
          <Fade top>

        <div className='front-menu'>
          <Link to='/about'>MAKEUP</Link>
          <Link to='/hero'>SKINCARE</Link>
          <Link to='/story'>ABOUT US</Link>
          <Link to='/login'>LOGIN </Link>

        </div>
        </Fade>
        </div> */}
      <div className="top-banner">
        <div className="top-banner-content">
          {/* <Fade top> */}
          <h1 className='text'>FENTY BEAUTY BY </h1> 
          {/* </Fade>
          <Fade bottom> */}
           <span className='front-page-span'>RIHANNA</span>
           {/* </Fade> */}
           <div>

           </div>
          <iframe
            title={"src"}
            className='front-iframe' 
            src={
              "https://player.vimeo.com/video/335012859?autoplay=1&loop=1&autopause=0&muted=1"
                //player.vimeo.com/video/265849213
                //Serena video for future project player.vimeo.com/video/173581467
            }
        
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen="true" 
            mozallowfullscreen="true"
            allowfullcreen="true"
            allow="autoplay; fullscreen"
            controls="0"
          ></iframe>

          {/* <Fade left> */}
          <div className="top-banner-scrolldown">
            <span className='hand'>☟</span>
          </div>
          {/* </Fade> */}
          
        </div>
    
      </div>
      <div className="front-container menu-list">
        {photos.map(({ title, url }, index ) => (
          <div key={index} className="menu-item">
              {/* <Fade left> */}
            <h1 className="menu-title">
              <span className="counter">FB</span>
              {title}
            </h1>
            {/* </Fade> */}
            <h1 className="menu-title clone">
              <span className="counter"></span>
              {title}
            </h1>

            <div className='menu-image-container'>
              <div
                className="menu-image"
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrontPage;