import React from "react";
import AddAvatar from "../images/addAvatar.png";

function Register() {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>FireChat</span>
				<span className='title'>Register</span>
				<form>
					<input type='text' placeholder='Username' />
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input style={{ display: "none" }} type='file' id='file' />
					<label htmlFor='file'>
						<img src={AddAvatar} />
						<span>Add an Avatar</span>
					</label>
					<button>Sign up</button>
					<p>Already Registered? Login</p>
				</form>
			</div>
		</div>
	);
}

export default Register;
