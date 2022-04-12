import React, { useEffect } from "react";
import "./ModelsCarousel.scss";
import Fade from 'react-reveal/Fade'



const unsplashUrls = [


  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL2021_T2BEAUTY_LIQUID_KILLAWATT_HONEY_HAWTIE_AJONG_DEEP_025_1200x1500_72DPI.jpg?v=1647985851",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL2021_T2BEAUTY_LIQUID_KILLAWATT_HONEY_HAWTIE_FATUMA_MEDIUM_DEEP_230.jpg?v=1647985851",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL2021_T2BEAUTY_LIQUID_KILLAWATT_HONEY_HAWTIE_ELISEO_MEDIUM_003.jpg?v=1647985851",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB2022_APRIL_SUNSTALKRPALETTE_MEDIUM_129_1.jpg?v=1648163716",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB2022_APRIL_SUNSTALKRPALETTE_MEDIUMDEEP_040_1.jpg?v=1648233884",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB2022_APRIL_SUNSTALKRPALETTE_LIGHT_179_1.jpg?v=1648163718",

];

const clamp = (value, lower, upper) => {
  if (value > upper) return upper;
  if (value < lower) return lower;
  return value;
};

export default function ModelsCarousel ()  {

  const slider = React.useRef();
  const otherRef = React.useRef({
    hasMousePress: false,
    startXPosition: 0,
    transformAmount: 0,
    velocity: 0,
    requestAnimationId: 0,
  });
  const mouseDown = (event) => {
    otherRef.current.hasMousePress = true;
    otherRef.current.startXPosition =
      event.pageX - otherRef.current.transformAmount;
    cancelMomentumTracking();
  };
  const mouseLeave = () => {
    otherRef.current.hasMousePress = false;
  };
  const mouseUp = () => {
    otherRef.current.hasMousePress = false;
    beginMomentumTracking();
  };

  const mouseMove = (event) => {
    if (!otherRef.current.hasMousePress) return;
    const { pageX } = event;
    const distance = pageX - otherRef.current.startXPosition;
    const clampedDistance = clamp(
      distance,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    otherRef.current.velocity =
      otherRef.current.transformAmount - clampedDistance;
    otherRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
  };

  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    otherRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => {
    cancelAnimationFrame(otherRef.current.requestAnimationId);
  };
  const momentumLoop = () => {
    const value = otherRef.current.transformAmount - otherRef.current.velocity;
    const clampedDistance = clamp(
      value,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    otherRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
    otherRef.current.velocity *= 0.9;

    if (Math.abs(otherRef.current.velocity) > 0.1) {
      otherRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
    }
  };

  useEffect(() => {
    const sliderCopy = slider.current;
    sliderCopy.addEventListener("mousedown", mouseDown);
    sliderCopy.addEventListener("mouseleave", mouseLeave);
    sliderCopy.addEventListener("mouseup", mouseUp);
    sliderCopy.addEventListener("mousemove", mouseMove);

    return () => {
      sliderCopy.removeEventListener("mousedown", mouseDown);
      sliderCopy.removeEventListener("mouseleave", mouseLeave);
      sliderCopy.removeEventListener("mouseup", mouseUp);
      sliderCopy.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
   <div className='models-container'>
  
    <p className='header-pr'>DISCOVER YOUR FAVORITE LOOK</p>

    <div className="family" ref={slider}>
      {unsplashUrls.map((url) => (
        <Fade bottom>
        <div className="family-item">
          <div
            className="family-item-image"
            style={{ backgroundImage: `url(${url})` }}
    
          ></div>
          <div className='desc'>
          <p className='product-desc'>MATCH STIX CONTOUR SKINSTICK: 
      </p>
          <p>  </p>
          </div>
          <button>DETAILS</button>
          <button>DETAILS</button>

        </div>
        </Fade>
      ))}
   
    </div>
    </div>
    </>
    
  );
};

