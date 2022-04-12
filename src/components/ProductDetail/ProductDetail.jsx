import React, {useEffect, useState} from 'react'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap';
import SingleProductContainer from './SingleProductContainer'
import './ProductDetail.scss'

export default function ProductDetail() {
    const[loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500)
    }, [])

    useEffect (() => {
      gsap.registerPlugin(ScrollTrigger);
    }, []);

  return loader ? (
    <div className='loader'/>
  ) : (
      <div >
          <SingleProductContainer />

      </div>
  )

  
}
