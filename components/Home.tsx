
const Home = () => {
  return (
    <div className="h-screen w-screen p-12 bg-white">
        <div className="flex">
            <div className="flex-col flex space-y-2">
                <h3 className="text-gray-500 text-lg">About me</h3>
                <h1 className="text-black text-6xl font-semibold">We Strive to Innovate</h1>
            </div>
            <div className="ms-auto">
                <button type="button"
                    className="hover:bg-black py-2 px-4 rounded-full items-center space-x-1 bg-gray-200 duration-200 flex hover:text-white">
                    <p>Become a Client</p>
                      <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="m220.24 132.24l
                      -72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z" /></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home