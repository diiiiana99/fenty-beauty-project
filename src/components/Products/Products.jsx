import React from 'react'
import './Products.scss'
import {Link} from 'react-router-dom'


function Products({url, description, index}) {
  return (
    <div className='grid-item'>
       <Link to='/prod'>

        <img className='grid-item-media' src={url} alt=''/>
       
        </Link>
        <p>{description}</p>

      
    </div>
  )
}

export default Products
