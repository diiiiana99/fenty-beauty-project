import React, { useEffect, useState } from "react";
import "./MakeupSlider.scss";
import Fade from 'react-reveal/Fade'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";



const unsplashUrls = [

  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_SUMMER22_T2PROD_ED_SUNSTALKR_0218_1200x1500_72DPI_1.jpg?v=1648233882",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_SPR_SUM22_T2PRODUCT_EDITORIAL_GLOSS_BOMB_DIP_06_1200x1500_c1a1a0b7-5972-4b29-96e9-1c25410fda77.jpg?v=1641408918",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/2021_06_FENTY_POSTHOL_1047_02_1200X1500_72DPI_HONEY_HAWTIE.jpg?v=16479858517",

  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_SUMMER22_T2PROD_ED_SUNSTALKR_0218_1200x1500_72DPI_1.jpg?v=1648233882",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_SPRING_2022_0209_03_1200X1500_72DPI_c202ac5f-de72-4487-8a0e-56ff649cc6f4.jpg?v=1645652497",
  "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/IMG_0109.jpg?v=1628180562",
];

const clamp = (value, lower, upper) => {
  if (value > upper) return upper;
  if (value < lower) return lower;
  return value;
};

export default function MakeupSlider ()  {

  const[loader, setLoader] = useState(true);

  useEffect (() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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
    <div className='products-container'>
      <p className='header-pr'>FOR HER EYES</p>
    <div className="family" ref={slider}>
      {unsplashUrls.map((url) => (
        <Fade left>
        <div className="family-item">
          <div
            className="family-item-image"
            style={{ backgroundImage: `url(${url})` }}
    
          ></div>
          <div className='desc'>
          <p className='product-desc'>Hiiiii</p>
          <p>Hiii</p>
          </div>
          <button>Add to Cart</button>
        </div>
        </Fade>
      ))}
   
    </div>
    <p className='header-pr'>FOR HER FACE</p>

    <div className="family" ref={slider}>
      {unsplashUrls.map((url) => (
        <Fade right>
        <div className="family-item">
          <div
            className="family-item-image"
            style={{ backgroundImage: `url(${url})` }}
    
          ></div>
          <div className='desc'>
          <p className='product-desc'>Hiiiii</p>
          <p>Hiii</p>
          </div>
          <button>Add to Cart</button>
        </div>
        </Fade>
      ))}
   
    </div>
  
    <p className='header-pr'>FOR HER LIPS</p>

    <div className="family" ref={slider}>
      {unsplashUrls.map((url) => (
        <Fade left>
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
          <button>Add to Cart</button>
        </div>
        </Fade>
      ))}
   
    </div>
    </div>
    </>
    
  );
};

