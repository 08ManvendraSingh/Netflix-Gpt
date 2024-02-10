const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[10%] px-6 md:px-24">
        <h1 className="text-2xl md:text-6xl font-bold mb-2">{title}</h1>
        <p className="md:inline-block hidden py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-black py-2 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg">▶️ Play</button>
            <button className="md:inline-block hidden mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">❗More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle