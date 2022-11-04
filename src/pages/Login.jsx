import React from "react";

function Login() {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>FireChat</span>
				<span className='title'>Login</span>
				<form>
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button>Sign in</button>
					<p>Dont have an account? Register</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
