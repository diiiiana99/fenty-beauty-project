import React from 'react'
import './Products.scss'
import {Link} from 'react-router-dom'


function Products({url, description,price, index}) {
  return (
    <div className='skincare-items'>
       <Link to='/prod'>

        <img className='grid-item-media' src={url} alt=''/>

        </Link>
        <p className='product-description'>{description}</p>
        <p className='product-description'>{price}</p>
     


      
    </div>

  )
}

export default Products
