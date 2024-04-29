import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login />
    },
    {
        path:"/browse",
        element: <Browse />
    }
])

useEffect (() => {
    onAuthStateChanged(auth, (user) => {
        if (user) { //User Sign In Case
          // User is signed in, 
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL: photoURL}))
          // ...
        } else { //User Sign out Case
          // User is signed out
          dispatch(removeUser());
        }
      });
},[])

    return(
        <div>
            <RouterProvider router= {appRouter}/>
        </div>
    )
}
export default Body;