import React, { useEffect, useState } from "react";
import "./RihannaAboutSection.scss";

const pic4 =
  "https://media.allure.com/photos/616db90e289512e1a74c75f9/3:4/w_468,h_624,c_limit/Best_Fenty_Beauty_Products.jpeg";
 

const pic5 =
" https://i.pinimg.com/736x/95/1e/0b/951e0bf81b042df524d5e630554866e0.jpg";


const pic6 =
  "https://portalpopline.com.br/wp-content/uploads/2020/08/rihanna-fenty-beauty-800x800.jpg";


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
    <div className="riri-wrapper">
      <div className="text-parent">
        <h1
          className="full"
          style={{
            transform: `translate3d(-${scrollPos / 3.5}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
      A smile is the best makeup any girl can wear
        </h1>
        <h1
          className="full"
          style={{
            transform: `translate3d(${scrollPos / 3}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
       Every woman deserves a man to ruin her lipstick, not her mascara
        </h1>
      </div>
      <img
        src={pic6}
        style={{
          transform: `translate3d(100%, calc(-${scrollPos *
            0.8}px - 50%), 0px)`,
        }}
      ></img>
          <img
        src={pic4}
        style={{
          transform: `translate3d(30%, calc(-${scrollPos *
            0.92}px - 50%), 0px)`,
        }}
      ></img>    <img
      src={pic5}
      style={{
        transform: `translate3d(-50%, calc(-${scrollPos *
          0.82}px - 50%), 0px)`,
      }}
    ></img>
      <div className="text-parent">
        <h1
          className="outline"
          style={{
            transform: `translate3d(-${scrollPos / 3.5}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
       A smile is the best makeup any girl can wear
        </h1>
        <h1
          className="outline"
          style={{
            transform: `translate3d(${scrollPos / 3}px, -${scrollPos *
              0.1}px, 0px)`,
          }}
        >
      Every woman deserves a man to ruin her lipstick, not her mascara
        </h1>
      </div>
    </div>
  );
};