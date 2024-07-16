import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies"
import  usePopularMovies  from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
    
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();

    return(
        <div>
           <Header />
           <MainContainer />
           <SecondaryContainer />

          
        </div>
    )
}
export default Browse;