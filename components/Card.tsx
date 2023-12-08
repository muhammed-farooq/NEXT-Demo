
const Card = () => {
  return (
    <div className='rounded-xl bg-gray-300'>
        <h1 className='text-3xl mt-2 mx-4 text-black font-semibold'>+300</h1>
        <div className="flex">
            <div className="mt-2 mx-4">
                <p className="text-gray-500">We have successfully completed a total of 300+ projects</p>
            </div> 
            <div>
                  <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" width={350}/>
            </div>
        </div>
    </div>
  )
}

export default Card