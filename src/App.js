import React, {useEffect, useState} from 'react'
import About from './components/MakeupSection/MakeupSection'
import Hero from './components/SkinCare/Hero';
import {
    BrowserRouter as Router,
    Switch,
   
    Route,
   
} from "react-router-dom";

import FrontPage from './components/FrontPage/FrontPage';
import './App.scss'
import Login from './components/Login/Login';
import CustomCursor from './components/CustomCursor/CustomCursor';
import gsap from 'gsap';
import Main from './components/Services/Main';
import GalleryItem from './components/ProductSlider/MakeupSlider';
import Fade from 'react-reveal/Fade'
import Navbar from './components/Navbar/Navbar'
import Models from './components/Models/ModelsCarousel';
import ProductDetail from './components/ProductDetail/ProductDetail'
import {ScrollTrigger} from "gsap/ScrollTrigger";



function App() {


  let timeline = gsap.timeline();
  




  return (
    <>
<Router>
  <Switch>
    <CustomCursor>
<Route exact path='/'>
  <Navbar/>
<FrontPage />
</Route>
<Route exact path='/about'>
  <Navbar/>
<About/>

 <GalleryItem/>
 </Route>


<Route exact path='/hero'>
{/* <Main/> */}


<Hero/>


 </Route>
  <Route exact path='/login'>
      <Login/>
   </Route>
   <Route exact path='/story'>
      <Main/>
      <Models/>
    </Route>
   <Route exact path='/quiz'>
   {/* <Models/> */}

   <ProductDetail/>
 

     </Route>
   </CustomCursor>
 </Switch>
 </Router>
 </>



  );
}

export default App;
