import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { slider } from "../../utils/menuData";
import cn from "classnames";
import SingleProductItem from "./SingleProductItem";
import RenderImages from "./RenderImages";
import { gsap } from "gsap";

// function RenderImages({}) {

//     const [products, setProducts] = useState([])
//     const {id, url, title, description} = products

//     // useEffect(() => {
//     //     console.log(id)
//     //   fetch(`http://localhost:3000/products/${id}`)
//     //   .then(r => {
//     //     if (r.ok) {
//     //       r.json().then(data => {
//     //         setProducts(data)

//     //       })
//     //     }
//     //   })
//     // }, [id] )
//     const [product, setProduct] = useState()

//     const fetchData = () => {
//         fetch("http://localhost:3000/products")
//           .then(response => {
//             return response.json()
//           })
//           .then(data => {
//             setProduct(data)
//             console.log("heybitch", data)
//           })
//       }

//       useEffect(() => {
//         fetchData()
//       }, [])

//     return slider.map(({url}, index)=> (

//         <img className={cn({"as-primary" : product === index})}
//         key={url}
//         style={{backgroundImage: `url(${url})`}}
//          alt=''

//         />

//     ));
// }

export default function SingleProductContainer() {
    const [displayImageIndex, setDisplayImageIndex] = useState(0);
    const [updateImage, setUpdateImage] = useState(0)
    const titleSliderRef = useRef(null);
    const imageSliderRef = useRef(null);

    useEffect(() => {
        function stopTrigger() {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: imageSliderRef.current,
                    start: "top top",
                    end: () => `+=${titleSliderRef.current.offsetHeight}`,
                    scrub: true,
                    pin: true,
                },
            });
            return timeline;
        }
        const master = gsap.timeline();
        master.add(stopTrigger());
    }, []);

    const [products, setProducts] = useState({});
    const params = useParams();
    console.log(params);
    // const id = 54

    useEffect(() => {
        fetch(`http://localhost:3000/products/${params.id}`).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setProducts(data);
                    console.log('hey bitchhhhh',data)
                });
            }
        });
    }, [params.id]);

    return (
        <div ref={imageSliderRef}  className="single-item-container">
            <div className="item-desc-left">
                {/* {products.map((product, index) => ( */}
                    <SingleProductItem
                        updateImage={setProducts}
                        key={products?.id}
                        product={products}
                        index={products.index}
                    />

                {/* ))} */}
            </div>
            <div ref={titleSliderRef} className="item-img-right sticky">
                <RenderImages displayImageIndex={displayImageIndex} products={products} />
            </div>
        </div>
    );
}

// import React, {useState, useRef, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import { slider } from "../../utils/menuData";
// import cn from 'classnames'
// import SingleProductItem from './SingleProductItem'
// import {gsap} from 'gsap'

// function RenderImages({product}) {
//     return slider.map(({url}, index)=> (

//         <img className={cn({"as-primary" : product === index})}
//         key={url}
//         style={{backgroundImage: `url(${url})`}}
//          alt=''

//         />

//     ));
// }

// export default function SingleProductContainer () {

// const [product, setProduct] = useState(0);
// const titleSliderRef = useRef(null);
// const imageSliderRef= useRef(null);

// useEffect(() => {
//     function stopTrigger(){

//         const timeline= gsap.timeline({
//             scrollTrigger: {
//                 trigger: imageSliderRef.current,
//                 start: "top top",
//                 end: () => `+=${titleSliderRef.current.offsetHeight}`,
//                 scrub: true,
//                 pin: true
//                     }
//         })
//             return timeline;

//     }
//         const master = gsap.timeline();
//         master.add(stopTrigger());

// }, [])

//   return (
//     <div ref={titleSliderRef} className='single-item-container'>
//         <div className='item-desc-left'>
//             {slider.map((slide, index) => (
//                 <SingleProductItem
//                 updateImage={setProduct}
//                 key={index}
//                 title={slide.title}
//                 description={slide.description}
//                 index={index}

//                 />
//             ))}
//         </div>
//         <div ref={imageSliderRef} className='item-img-right sticky'>
//         <RenderImages  product={product}/>
//         </div>
//     </div>
//   )
// };
