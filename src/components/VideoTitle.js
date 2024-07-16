const VideoTitle = ({title,overview}) => {
    return (
    <div className=" aspect-video w-screen pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black pointer-events-none">
       <h1 className="font-bold text-4xl">{title}</h1> 
       <p className="py-6 text-base w-1/4">{overview}</p>
       <div className="pointer-events-auto">
        <button className=" p-3 px-10 text-xl text-white bg-gray-50 bg-opacity-50 rounded-lg hover:bg-opacity-80 " >▶️ Play</button>
        <button className=" p-3 px-10 mx-2 text-lg text-white bg-gray-500 bg-opacity-50 rounded-lg" >More Info</button>
       </div>
    </div>)
    
};

export default VideoTitle;

