


import React, { useEffect, useState } from "react";
import "./Rihanna.scss";
import Fade from 'react-reveal/Fade'


const pic1 =
 
  "https://www.fashiongonerogue.com/wp-content/uploads/2018/09/Rihanna-Fenty-Beauty-Nude-Stunna-Lip-Paint-Campaign03.jpg"
  const pic2 =
  "https://www.fashiongonerogue.com/wp-content/uploads/2018/09/Rihanna-Fenty-Beauty-Nude-Stunna-Lip-Paint-Campaign01.jpg";

  const pic3 = "https://www.fashiongonerogue.com/wp-content/uploads/2018/09/Rihanna-Fenty-Beauty-Nude-Stunna-Lip-Paint-Campaign05.jpg"
const useScrollPosition = () => {
  // Store the state
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};
export default () => {

  const scrollPos = useScrollPosition();

  return (

    <div className="rihanna-wrapper">
      <div className="text-parent">
        <h1
          className="full"
          style={{
            transform: `translate3d(-${scrollPos / 1}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
        Her vision, above all, is to inspire: “Makeup is there for you to have fun with.
        </h1>
        <h1
          className="full"
          style={{
            transform: `translate3d(${scrollPos / 1.5}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
        every women everywhere should be included
        </h1>
      </div>

      <img
        className='rihanna-pic'
        src={pic1}
        style={{
          transform: `translate3d(100%, calc(-${scrollPos *
            0.95}px - 50%), 0px)`,
        }}
      ></img>

         <img
        className='rihanna-pic'
        src={pic2}
        style={{
          transform: `translate3d(5%, calc(-${scrollPos *
            1.02}px - 30%), 0px)`,
        }}
      ></img>
        <img
        className='rihanna-pic'
        src={pic3}
        style={{
          transform: `translate3d(-80%, calc(-${scrollPos *
            0.82}px - 50%), 0px)`,
        }}
      ></img>
  
      <div className="text-parent">
        <h1
          className="outline"
          style={{
            transform: `translate3d(-${scrollPos / 1}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
      Her vision, above all, is to inspire: “Makeup is there for you to have fun with.
        </h1>
        <h1
          className="outline"
          style={{
            transform: `translate3d(${scrollPos / 1.5}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
        every women everywhere should be included
        </h1>
      </div>
    </div>

  );
};
