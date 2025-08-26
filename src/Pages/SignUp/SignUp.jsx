import { createUserWithEmailAndPassword,sendEmailVerification  } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../Firebase';

const SignUp = () => {

const handleSubmitSignUp = (e) =>{
      e.preventDefault();

	const name = e.target.name.value; 
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(name, email,password);


  createUserWithEmailAndPassword(auth,email,password)
   .then(({ user }) => sendEmailVerification(user))
  .then(() => console.log("Verification email sent!"))
  .catch((error) => console.error(error));

}

    return (
     <div className='mx-auto items-center'>
           <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 justify-center mx-auto items-center bg-base-300 mt-10">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm dark:text-gray-600">Sign Up to access your account</p>
	</div>
	<form onSubmit={handleSubmitSignUp} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			{/* name */}
			<div>
				<label htmlFor="name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			{/* email */}
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
               	{/* password */}
			<div>
			  <label htmlFor="password" className="block mb-2 text-sm">Password</label>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button  type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn btn-primary">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Have an account yet?
				<NavLink to="/signin" rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign IN</NavLink>.
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default SignUp;