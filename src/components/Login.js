import { useState,useRef } from "react";
import Header from "./Header";
import {validationCheck} from "../utils/Validation"
import { createBrowserRouter, useNavigate } from "react-router-dom";
//For firebase
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth"; 
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";

const Login = () => 
{
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)

   

    const SignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //Validating the Form Data
        const message = validationCheck(email.current.value,password.current.value);
        console.log(message,"ReturnMNessage");
        setErrorMessage(message);

        //Sign up (Firebase)

        if(!message)
        {
            console.log(isSignInForm,"FormTytpe");
            console.log("Working");
            if(!isSignInForm){
                console.log("Working1");
                //SignUp Form Logic
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://avatars.githubusercontent.com/u/71914510?s=400&u=fc2f159a27bd1a992d99361e70b561c93b45fb5e&v=4",
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL: photoURL}))
      // Profile updated!
      navigate("/browse");
      
    }).catch((error) => {
      setErrorMessage(errorMessage);
      
    });
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "--" + errorMessage)
    // ..
  });
            }
            else{
                //SignIn Form Logic
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    console.log("SignIn Success");
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "--" + errorMessage)
  });

            }
        }


    }


    return (
                <div>
                <Header />
                        <div className="absolute">
                            <img alt="bg-Image"  src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/a3e37765-5f15-4639-8c16-e1eaa0044132/IE-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
                        </div>
                        <form onSubmit={(e)=> e.preventDefault()} className=" w-3/12 p-12 text-white absolute bg-black bg-opacity-80 my-36 left-0 right-0 rounded-md mx-auto">
                            <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
{!isSignInForm && (         <input type="text"  ref ={name} className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="Full Name" />)}
                            <input type="text" ref = {email} className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="x@gmail.com" />
                            <input type="password" ref = {password} className="shadow-lg p-4 bg-gray-800 my-2 w-full" placeholder="Password" />
                            <p className="text-red-700 p-2">{errorMessage}</p>
{!isSignInForm && (         <input type="text" className="shadow-lg py-4 bg-gray-800 my-2 w-full" placeholder="Re-Enter Password" />)}
                            {isSignInForm ?
                            <button className="p-4 my-6 shadow-lg rounded-lgc bg-red-700 w-full" onClick={handleButtonClick}>Sign In</button> :
                            <button className="p-4 my-6 shadow-lg rounded-lgc bg-red-700 w-full" onClick={handleButtonClick}>Sign Up</button>}
                            {isSignInForm ?
                            <p className="py-4 text-white cursor-pointer text-xs" onClick={SignInForm}>Are you new to Netflix ? Sign Up Now </p> :
                            <p className="py-4 text-white cursor-pointer text-xs" onClick={SignInForm}>Already a User? Sign In Now </p> }
                        </form>
                </div>
            )
}
export default Login;