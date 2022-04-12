import React, { useState } from 'react';
import './Login.scss';
import Fade from 'react-reveal/Fade';


export default function Login({ username, setUsername, password, setPassword, handleLogInSubmit, showSignInModal, setShowSignInModal, signUpFirstName, setSignUpFirstName, signUpLastName, setSignUpLastName, signUpUsername, setSignUpUsername, signUpPassword, setSignUpPassword, signUpPasswordConfirmation, setSignUpPasswordConfirmation, signUpImage, setSignUpImage, signUpDesc, setSignUpDesc, handleSignUpSubmit }) {

    const [formType, setFormType] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }

    return (
 
<div className='main-container bg-red' 
>


    <Fade top>
<div className={formType ? "container" : "container right-panel-active"}>
    
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button onClick={onFormClick}>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button onClick={onFormClick}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={onFormClick} class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
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