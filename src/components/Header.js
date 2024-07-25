import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {auth} from "../utils/Firebase"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSearchSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector(store => store.user)
const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
const  handleSignout = () =>{
        signOut(auth).then(() => {
                //dispatch(removeUser());
              }).catch((error) => {
                // An error happened.
              });
} 

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) { //User Sign In Case
          // User is signed in, 
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL: photoURL}))
          navigate("/browse");
          // ...
        } else { //User Sign out Case
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      // Unscribing when the component is unmounts
      return () => unsubscribe 
},[])

const handleGptSearchClick = () =>{
  //Toggle GPT search
  dispatch(toggleGptSearchView());
}
const handleLangChange = (e) =>{
  
  dispatch(changeLanguage(e.target.value));
}

    return(
            <div className=" flex absolute py-2 px-2 w-screen bg-gradient-to-b from-black z-10 justify-between">
                    <img alt="Header-photo" className="w-40" 
                    src= {LOGO} />
                    
    {user &&(          
          <div className="flex  p-2">
            {/* for Language changes */}
            
           { showGptSearch && <select onChange={handleLangChange} className=" bg-purple-800 text-white p-2 m-2"> 
              {SUPPORTED_LANGUAGES.map((lang) =>(
              <option className="text-white " key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
             
            </select>}
            {!showGptSearch ? <button className="px-6 mx-4 my-2 bg-purple-800 rounded-sm text-white" 
            onClick={handleGptSearchClick}>GPT Search</button> :
            <button className="px-6 mx-4 my-2 bg-purple-800 rounded-sm text-white" 
            onClick={handleGptSearchClick}>Home Page</button>
              }
                <img className="w-10 h-10 my-4" src={"https://avatars.githubusercontent.com/u/71914510?s=400&u=fc2f159a27bd1a992d99361e70b561c93b45fb5e&v=4"} alt="UserIcon" />
                <button onClick={handleSignout} className=" mr-8 cursor-pointer pointer-events-auto px-2 text-white font-bold">Sign Out</button>
                       
                    </div>
)}
            </div>
          )


}
export default Header;


