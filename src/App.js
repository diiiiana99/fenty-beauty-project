import React, {useEffect, useState} from 'react'
import About from './components/MakeupSection/MakeupSection'
import Hero from './components/SkinCare/Hero';
import {
    BrowserRouter as Router,
    Switch,
   
    Route,
    useHistory
   
} from "react-router-dom";

import FrontPage from './components/FrontPage/FrontPage';
import './App.scss'
import Login from './components/Login/Login';
import Main from './components/Services/Main';
import MakeupSlider from './components/ProductSlider/MakeupSlider2';
import MakeupSlider2 from './components/ProductSlider/MakeupSlider2';
import MakeupSlider3 from './components/ProductSlider/MakeupSlider3';
import MakeupSlider4 from './components/ProductSlider/MakeupSlider4';


import Navbar from './components/Navbar/Navbar'
import Models from './components/Models/ModelsCarousel';
import ProductDetail from './components/ProductDetail/ProductDetail'
import Rihanna from './components/Rihanna/Rihanna';
import RihannaAboutSection from './components/Rihanna/RihannaAboutSection';
import Cart from './components/Cart/Cart';
import axios from 'axios'




function App() {
    let history = useHistory();

    const url = process.env.REACT_APP_URL



    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");

    const [signUpPassword, setSignUpPassword] = useState("");

    const [signUpPasswordConfirmation, setSignUpPasswordConfirmation] = useState("");
  
    // Log In:
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
  
    // Signed In:
    const [signedIn, setSignedIn] = useState(false);
    const [user,setUser] = useState("")
  
    // useEffect(()=>{
      // axios.get('/me').then(r=>{console.log(r)})
    //   fetch("/me")
    //   .then((r) => {
    //     if (r.ok) {
    //       r.json().then((user) => {
    //         setUser(user)
    //         setSignedIn(true)
    //       }
    //       );
    //     }
    //   });
  
    // },[])
  

  
    function handleSignUpSubmit(e) {

      e.preventDefault();
      const signUpDetails = {

        username: signUpUsername,
        email: signUpEmail,
        password: signUpPassword,
        password_confirmation: signUpPasswordConfirmation
      }
      axios.post(url + `/signup`, signUpDetails)
        .then(r=>{
            console.log(r)
            setSignedIn(true)
          })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data.errors);
            alert(error.response.data.errors)
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
      
    }
  
    function handleLogInSubmit(e){
      e.preventDefault();
      const logInDetails ={
        username,
        email,
        password
      }

  
      axios.post(url + `/login`, logInDetails)
      .then((r)=>{
        console.log(r)
        // console.log(r)
        setSignedIn(true)
        setUser(r.data)
        history.push('/')
        window.location.reload();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
          alert(error.response.data.errors)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  
    }
  
  return (
    <>
  <Router>
    <Switch>
    <Route exact path='/'>
        <FrontPage />
    </Route>
    <Route exact path='/about'>
    <About/>
          <Rihanna/>
        <Navbar/>
        <MakeupSlider/>
        <MakeupSlider2/>
        <MakeupSlider3/>
        <MakeupSlider4/>
      </Route>
 
    <Route exact path='/hero'>
        <Navbar/>
        <Hero/>
    </Route>
    <Route exact path='/login'>
        <Navbar/>
        <Login
        username={username}
          password={password}
          setUsername={setUsername}
          setEmail={setEmail}
         setPassword={setPassword}
          handleLogInSubmit={handleLogInSubmit}
          signedIn={signedIn}
        signUpUsername={signUpUsername}
        setSignUpUsername={setSignUpUsername}
        setSignUpEmail={setSignUpEmail}
        signUpPassword={signUpPassword}
        setSignUpPassword={setSignUpPassword}
        signUpPasswordConfirmation={signUpPasswordConfirmation}
        setSignUpPasswordConfirmation={setSignUpPasswordConfirmation}
        handleSignUpSubmit={handleSignUpSubmit}
        />
    </Route>
    <Route exact path='/story'>
        <Navbar/>
        <Main/>
        <RihannaAboutSection/>
        <Models/>
    </Route>
    <Route exact path='/singleproduct/:id'>
        <Navbar/>
        <ProductDetail/>
    </Route>
    <Route exact path='/cart'>
    <Navbar/>
    <Cart/>
    </Route>
    <Route exact path='/prod'>

    </Route>
    <Route exact path='/singleproduct5'>

    </Route>
    </Switch>
 </Router>
 </>



  );
}

export default App;
