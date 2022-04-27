import React, { useEffect, useState } from "react";
import "./MakeupSlider.scss";
import Fade from 'react-reveal/Fade'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router'
import { useParams } from "react-router-dom";






const clamp = (value, lower, upper) => {
  if (value > upper) return upper;
  if (value < lower) return lower;
  return value;
};

export default function MakeupSlider2 ()  {

  
  
  const[loader, setLoader] = useState(true);
  const [products, setProducts] = useState([])


  useEffect( () => {
    fetch("http://localhost:3000/products")
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setProducts(data)
          setProducts(data.filter(product => product.category === "FOR HER FACE"))

        })
        
      }
    })
  }, [] )



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
console.log(products)
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

    if (Math.abs(otherRef.current.velocity) > 0.4) {
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

  const {id} = useParams();

  return (
    <>
   <div className='products-container'>
 
  
   <p className='header-pr'> RECOMMENDED FOR YOU </p>
    <div className="family" ref={slider}>
   
      {products.map((product) => (
        <Fade left>
        <div className="family-item">
          <Link to={`/singleproduct/${product.id}`} >
          <div
            className="family-item-image"
            style={{ backgroundImage: `url(${product?.images[0]?.url})` }}
    
          ></div>
          </Link>
          <div className='desc'>
          <p className='product-desc'>{product.title}/
      </p>
          <p className='price'> ${product.price} </p>

          <button>Add to Cart</button>

          </div>
        </div>
        </Fade>
      ))}
   
    </div>
    

    </div>
   
    </>
    
  );
};



