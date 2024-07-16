
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return( <div className="w-screen ">
                    <iframe className="w-screen aspect-video z-10"
                        
                        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" 
                        ></iframe>
            </div>
            
    );
    console.log("trailerVideo")
}

export default VideoBackground;