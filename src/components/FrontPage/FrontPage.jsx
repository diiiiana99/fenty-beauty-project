import React from "react";
import Fade from 'react-reveal/Fade'

import { photos } from "../../utils/datas.js";


import "./frontpage.scss";

const FrontPage = () => {
  return (
    <div>
      <div className="header">
          <Fade bottom >
        <div className="logo">FentyBeauty</div>
       
        </Fade>
       
      </div>
      <div className="top-banner">
        <div className="top-banner-content">
          <Fade top>
          <h1 className='text'>FENTY BEAUTY BY </h1> 
          </Fade>
          <Fade bottom>
           <span>RIHANNA</span>
           </Fade>
        
          <iframe
            title={"src"}
            className='resp-iframe' 
            src={
              "https://player.vimeo.com/video/256576531?autoplay=1&loop=1&autopause=0&muted=1"
                //player.vimeo.com/video/265849213
            }
        
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; fullscreen"
            controls="0"
          ></iframe>
          <Fade left>
          <div className="top-banner-scrolldown">
            <span>☟</span>
          </div>
          </Fade>
        </div>
    
      </div>
      <div className="main-container menu-list">
        {photos.map(({ title, url }, ) => (
          <div key={url} className="menu-item">
              <Fade left>
            <h1 className="menu-title">
              <span className="counter">FB</span>
              {title}
            </h1>
            </Fade>
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