import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();

        const filterTrailer = json.results.filter((vd) => vd.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        
        
    };
    useEffect(()=>{
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;