import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import cn from 'classnames'



 
    function RenderImages({products, displayImageIndex}) {


        // const [products, setProducts] = useState([])
        // const params = useParams()
        // console.log(params)
        // // const id = 54
    
        // useEffect(() => {
        //     fetch(`http://localhost:3000/products/${params.id}`)
        //     .then(r => {
        //     if (r.ok) {
        //       r.json().then(data => {
        //         setProducts(data)
        //         console.log('yo', data)
         
        //       })
        //     }
        //   })
        // }, [params.id] )

        console.log('hey bit', products.images)
        if (!products.images) return null
        const arrImages =  products.images.map((image, index) => {
            return (
                <img 
                    className={cn({"as-primary" : displayImageIndex === index})} 
                    key={products?.id}
                    style={{backgroundImage: `url(${image.url})`}}


                    alt=''
                /> 
        )})

        console.log('yo', arrImages)

        return (
               <div key={products.id}>{arrImages}</div>
        )
    }

export default RenderImages
