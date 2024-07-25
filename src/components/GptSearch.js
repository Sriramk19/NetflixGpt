import GptMovieSuggestions from "./GptMovieSuggestions";
import GptBar from "./Gptbar";
import { BG_URL } from "../utils/constants";

 
 const GptSearch = () => {
   return(
      <div>
          <div className="absolute -z-10">
                            <img alt="bg-Image"  src={BG_URL} />
                        </div>
          <GptBar />
          <GptMovieSuggestions />
      </div>
  )
 }
 export default GptSearch;