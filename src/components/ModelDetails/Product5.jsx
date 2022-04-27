import React, {useEffect, useState} from 'react'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap';
import SingleProduct3 from './SingleProduct3'
import './Product3.scss'

export default function Product5() {
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
          <SingleProduct3 />

      </div>
  )

  
}
