Netflix GPT

- Create react app
- Configurating Taildwind css
- Header
- Routing o fAPP
-  Login Form
- Sign-Up form
- Form Valiadation
- Use Ref Hooks
- firebase Setup
- hosted the application
- Created Sign in user API
- Created Redux store with user slice
- Implemented Sign Out feature
- Update Profile API call
- [ BUG FIX ] Sign up user name and profile picture update
- [ BUG FIX ] User not loged in redirect to login page
- Building movies screen (Fetch from TMDB - movies api) 
- Unscribred to the onAuthstatechange Callback in the Header
- info about strict mode
- Register for TMDB and get the access token
- In Docmentation get the syntax from now Playing movies
- Get data from now playing movies 
- Solved Early return [Concept]
- Custom Hooks for now planing movies
- Create movie Slice
- Update Store for movie Data
- Planning for main Container & SecondaryContainer  
- Fetch Data For trailer Video  
- Update Store with Trailer Video Data
- Embded the youtube Video and make it autoplay and mute    
- Tailwind classes to make the main container to look awesome
- Built Secondary Component
- Built Movie List  - Built Movie Card
- TMDB Image CDN URL
- Made UI amazing with TailwindCSS
- use varios Custom Hooks
- GPT Search feature 
- Gpt Seasrch bar
- Added Multi Langiagal feeature 
- Integratede GPT API's (got Open key)
- 



- Features

-Login /SignUp page
    - SignInSign Up Page
    - Redirect to Browse Page

Browse Page(after authentucation)
    - Header
    - main movie
            - Trailer in background
            - Title and description
            - Movie suggestion rows
            - Movie List n...
    -NetflixGPT
        - Search bar
        - movie suggestions


        

- Formik - a form library to use in react
- Use selector is used to access the store in a web component
- dispatch is used to make changes in the store
- react fragment when there is nop parent 
eg.
{
    <div>
           <Header/> 
           {
           showGptSearch ? <GptSearch /> : 
           -- ><><MainContainer />
           <SecondaryContainer /></> <-- React fragment
    }
}

Redux Store Creation:

Install npm i -D @reduxjs/toolkit
npm i redux-react


Browse page :
    MainContainer
    - Video Container
    - Video title
    SecondContainer
    - movies * n
    - cards * n



# Solutions for Issues Faced 
    //Added pointer - events-none to solve the video play clickable issue from overlay