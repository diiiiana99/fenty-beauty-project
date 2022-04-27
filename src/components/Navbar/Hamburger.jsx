import React from 'react'
import './Hamburger.scss'
import { FaShoppingCart} from 'react-icons/fa'
import { VscAccount} from 'react-icons/vsc'
import {Link} from 'react-router-dom'


const Hamburger = () => {
    return (

        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="/"><li>WELCOME,HARRIS!</li></a>
                    <a href="about"><li>CATEGORIES</li></a>
                    <a href="about"><li>MAKEUP</li></a>
                    <a href="hero"><li>SKINCARE</li></a>
                    <a href="story"><li>MAKEUP LOOKS</li></a> 
                    <Link to='/login'><VscAccount/>&nbsp; &nbsp;</Link>
                    <Link to ='/cart'><FaShoppingCart/> </Link>
                  
          
                    
                
                </ul>
            </div>
        </nav>
    )
}

export default Hamburger