import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies"
import  usePopularMovies  from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";


const Browse = () => {
   const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
    
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();

    return(
        <div>
           <Header /> 
           {
           showGptSearch ? <GptSearch /> : 
           <><MainContainer />
           <SecondaryContainer /></>
    }

          
        </div>
    )
}
export default Browse;