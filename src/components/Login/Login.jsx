import React, { useState } from 'react';
import './Login.scss';
import { useHistory } from "react-router-dom";

import Fade from 'react-reveal/Fade';


export default function Login({  username, setUsername, password, setPassword, handleLogInSubmit, signUpUsername, setSignUpUsername, signUpPassword, setSignUpPassword, signUpPasswordConfirmation, setSignUpPasswordConfirmation, handleSignUpSubmit, signedIn, setSignUpEmail}) {

    const [formType, setFormType] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }



	const history = useHistory();

	const routeChange = () =>{ 
	  let path = `/`; 
	  history.push(path);
	}


    return (
 
<div className='main-container bg-red' 
>


    <Fade top>
<div className={formType ? "container" : "container right-panel-active"}>
    
	<div class="form-container sign-up-container">
		<form action="#" onSubmit={handleSignUpSubmit}>
			<h1>Create Account</h1>
			<div className='form2-input-fullname'>
                
            </div>
=			<input className='form2-input' type="text" placeholder="Username" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
=			<input className='form2-input' type="text" placeholder="Email" value={setSignUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
            <input className='form2-input' type="password" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
            <input className='form2-input-end' type="password" placeholder="Password Confirmation" value={signUpPasswordConfirmation} onChange={(e) => setSignUpPasswordConfirmation(e.target.value)} />
			<button type='submit'>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#" onSubmit={handleLogInSubmit}>
			<h1>Sign in</h1>
			<div class="social-container">
				
			</div>
			<span>or use your account</span>
			<input className='form2-input' type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className='form2-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a className='form2-a'>Forgot your password?</a>
            <button className='form2-button' type='submit' onClick={routeChange}  >Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back, Baddie!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={onFormClick} class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello,Baddie!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={onFormClick} class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</Fade>
</div>

    )
}