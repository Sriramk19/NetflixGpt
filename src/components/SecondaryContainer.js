import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector((store)=> store.movies);
    return( 
        <div className="bg-black">
            <div className=" pl-16 -mt-52 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Trending"} movies={movies.TrendingMovies}/>
                    <MovieList title={"Popular"} movies={movies.PopularMovies}/>
                    <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
            </div>
        
        </div>
    );  
};

export default SecondaryContainer;
