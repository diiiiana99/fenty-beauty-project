import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { slider } from "../../utils/menuData";
import cn from 'classnames'
import SingleProductItem from './SingleProductItem'
import {gsap} from 'gsap'


function RenderImages({product}) {
    return slider.map(({url}, index)=> (

        <img className={cn({"as-primary" : product === index})}
        key={url}
        style={{backgroundImage: `url(${url})`}}
         alt=''
        
        />
    
    ));
}

export default function SingleProductContainer () {

const [product, setProduct] = useState(0);
const titleSliderRef = useRef(null);
const imageSliderRef= useRef(null);

useEffect(() => {
    function stopTrigger(){

        const timeline= gsap.timeline({
            scrollTrigger: {
                trigger: imageSliderRef.current,
                start: "top top",
                end: () => `+=${titleSliderRef.current.offsetHeight}`,
                scrub: true,
                pin: true
                    }
        })
            return timeline;

       
    }
        const master = gsap.timeline();
        master.add(stopTrigger());
    
}, [])



  return (
    <div ref={titleSliderRef} className='single-item-container'>
        <div className='item-desc-left'>
            {slider.map((slide, index) => (
                <SingleProductItem
                updateImage={setProduct}
                key={index}
                title={slide.title}
                description={slide.description}
                index={index}
                
                />
            ))}
        </div>
        <div ref={imageSliderRef} className='item-img-right sticky'>
        <RenderImages  product={product}/>
        </div>
    </div>
  )
};


