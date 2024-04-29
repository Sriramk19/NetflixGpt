import React from "react";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {auth} from "../utils/Firebase"
//import { removeUser } from "../utils/userSlice";


const Header = () => {
        const navigate = useNavigate();
        
        const user = useSelector(store => store.user)
       const  handleSignout = () =>{
                signOut(auth).then(() => {
                        navigate("/");
                        //dispatch(removeUser());
                      }).catch((error) => {
                        // An error happened.
                      });
        } 
    return(
            <div className=" flex absolute py-8 px-2 w-screen bg-gradient-to-b from-black z-10 justify-between">
                    <img alt="Header-photo" className="w-40" 
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
                    
{user &&(                    <div className="flex">
                    <img className="w-8 h-8 my-4" src={"https://avatars.githubusercontent.com/u/71914510?s=400&u=fc2f159a27bd1a992d99361e70b561c93b45fb5e&v=4"} alt="UserIcon" />
                    <button onClick={handleSignout} className="cursor-pointer px-2 text-white font-bold">Sign Out</button>
                       
                    </div>
)}
            </div>
          )
}
export default Header;


