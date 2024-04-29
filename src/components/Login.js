import { useState } from "react";
import Header from "./Header";



const Login = () => 
{
    const [isSignInForm,setIsSignInForm] = useState(true)
    const SignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }


    return (
                <div>
                <Header />
                        <div className="absolute">
                            <img alt="bg-Image"  src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/a3e37765-5f15-4639-8c16-e1eaa0044132/IE-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
                        </div>
                        <form className=" w-3/12 p-12 text-white absolute bg-black bg-opacity-80 my-36 left-0 right-0 rounded-md mx-auto">
                            <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
{!isSignInForm && (         <input type="text" className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="Full Name" />)}
                            <input type="text" className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="x@gmail.com" />
                            <input type="text" className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="Password" />
{!isSignInForm && (         <input type="text" className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="Re-Enter Password" />)}
                            {isSignInForm ?
                            <button className="p-4 my-6 shadow-lg rounded-lgc bg-red-700 w-full">Sign In</button> :
                            <button className="p-4 my-6 shadow-lg rounded-lgc bg-red-700 w-full">Sign Up</button>}
                            {isSignInForm ?
                            <p className="py-4 text-white cursor-pointer text-xs" onClick={SignInForm}>Are you new to Netflix ? Sign Up Now </p> :
                            <p className="py-4 text-white cursor-pointer text-xs" onClick={SignInForm}>Already a User? Sign In Now </p> }
                        </form>
                </div>
            )
}
export default Login;