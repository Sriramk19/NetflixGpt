import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"

import gptReducer from "./GptSearchSlice"
import configReducer from "./configSlice";


const appStore = configureStore(
    {
        reducer : {
            
            //user is a slice of your application state. It's a specific part of the state that userReducer handles.
            //userReducer is the reducer function responsible for handling actions related to the user slice of the state. 
            //It specifies how the state should change in response to user actions.
            user: userReducer, 
            movies: moviesReducer,
            gpt : gptReducer,
            config : configReducer
        },
    }
);

export default appStore;