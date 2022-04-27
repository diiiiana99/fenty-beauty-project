import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import { VscAccount } from 'react-icons/vsc';



// import ProfilePage from '../ProfilePage/ProfilePage.jsx';

const Navbar = ({ signedIn }) => {


    console.log(signedIn)
    return (
        <div>
            <div className="top-bar">
                <div className="mover-container">
                    <a href="/product" style={{color: "white"}}><div className="mover-1"></div></a>
                </div>
            </div>
            <div className="navbar">
                
                <Hamburger />
                <div className="logo"><a href="/" style={{textDecoration: "none", fontSize: "2em", fontWeight: "bolder", color: "#181818"}}><img src=''/></a>
                    
                        {/* <Link to='/' className="navbar-logo">
                            <h1 className="iso-k">Iso Kicks</h1>
                        </Link> */}
                  
                </div>
                <span className="rightside1">{signedIn ?
                    <Link to="/profile">
                        <VscAccount/>
                    </Link> : <Link to="/login"> <img src=''></img></Link>}
                </span>
                <span className="rightside2">
                    <Link to="/cart">
                        <img src=''></img>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar

// export default Navbar
