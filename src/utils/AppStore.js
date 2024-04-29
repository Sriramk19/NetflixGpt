import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

const appStore = configureStore(
    {
        reducer : {
            user: userReducer, 
            //user is a slice of your application state. It's a specific part of the state that userReducer handles.
            //userReducer is the reducer function responsible for handling actions related to the user slice of the state. 
            //It specifies how the state should change in response to user actions.
        },
    }
);

export default appStore;