import React, {useEffect, useState} from 'react'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap';
import SingleProduct2 from './SingleProduct2'
import './Product2.scss'

export default function Product2() {
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
          <SingleProduct2 />

      </div>
  )

  
}
