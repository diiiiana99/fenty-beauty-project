import React from 'react'
import About from './components/About/About'
import Hero from './components/Products/Hero';
import {
    BrowserRouter as Router,
    Switch,
   
    Route,
   
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import './App.scss'
import Login from './components/Login/Login';
import CustomCursor from './components/CustomCursor/CustomCursor';


function App() {
  return (
    <>
<Router>
  <Switch>
<Route exact path='/'>

<FrontPage/>
</Route>
<Route exact path='/about'>
 <About/>
 </Route>


<Route exact path='/hero'>
 <Hero/>
 </Route>
 <Route exact path='/login'>
   <Login/>
   </Route>
 </Switch>
 </Router>
 </>



  );
}

export default App;
