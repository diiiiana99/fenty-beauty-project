import React from 'react'
import './Products.scss'
import {Link} from 'react-router-dom'


function Products({url, description, index}) {
  return (
    <div className='skincare-items'>
       <Link to='/prod'>

        <img className='grid-item-media' src={url} alt=''/>
       
        </Link>
        <p className='product-description'>{description}</p>

      
    </div>
  )
}

export default Products
