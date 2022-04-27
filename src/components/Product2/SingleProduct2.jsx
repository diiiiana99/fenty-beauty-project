import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import fakeData3 from '../../utils/fakeData2'
import cn from 'classnames'
import Product3 from './Product3'
import {gsap} from 'gsap'


function RenderImages2({product}) {
    return fakeData3.map(({url}, index)=> (

        <img className={cn({"as-primary" : product === index})}
        key={url}
        style={{backgroundImage: `url(${url})`}}
         alt=''
        
        />
    
    ));
}

export default function SingleProduct2 () {

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

            {fakeData3.map((slide, index) => (
                <Product3
                updateImage={setProduct}
                key={index}
                title={slide.title}
                description={slide.description}
                index={index}
                
                />
            ))}

        </div>
        <div ref={imageSliderRef} className='item-img-right sticky'>
        <RenderImages2  product={product}/>
        </div>

]
    </div>
  )
};