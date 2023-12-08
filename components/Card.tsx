type CardProps = {
    title:string,
    dis:string,
    vid:string
}
const Card = ({ title,dis,vid }: CardProps) => {
  return (
      <div className='rounded-3xl bg-gray-200 overflow-hidden h-76'>
          <h1 className='text-4xl mt-4 mx-6 text-black font-semibold'>{title}</h1>
        <div className="grid grid-cols-5 h-full w-full">
              <div className="ml-6 col-span-2 h-36 pt-2">
                <p className="text-gray-400 text-xs">{dis}</p>
            </div> 
              <div className="relative w-[190px] mb-5">
                  <video src={`/${vid}`} className="bg-gray-200 right-0 bottom-0  absolute h-[150px] " style={{mixBlendMode:"darken"}} autoPlay loop muted/>
            </div>
        </div>
    </div>
  )
}

export default Card