import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptBar = ()  => {

    const langSelection = useSelector((store) => store.config.lang)

    return(
        <div className="pt-[6%] flex justify-center">
            <form className=" w-1/2 bg-black grid grid-cols-12 rounded-sm" >
                <input 
                  className=" p-4 m-4 col-span-9" 
                  type="text" 
                  placeholder={lang[langSelection].gptSearchPlaceholder}>
               </input>
                <button className="rounded-sm text-white bg-red-800 col-span-3 px-4 py-2 m-4">
                  {lang[langSelection].search}
                </button>
            </form>
        </div>
    )
}
export default GptBar;                        