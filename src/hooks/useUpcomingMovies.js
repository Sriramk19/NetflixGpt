import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../utils/movieSlice";

const useUpcomingMovies = () =>{
 //Fetch data from TMDB from API and add it to the redux store.
 const dispatch = useDispatch();
 const getUpComingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
     const json = await data.json()
     dispatch(addUpcomingMovies(json.results))
 } 

 useEffect(()=>{
     getUpComingMovies();
 },[])
}

export default useUpcomingMovies;