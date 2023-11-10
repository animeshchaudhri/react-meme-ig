import React from 'react'
import { useState } from 'react'

function MemeCard(props) {
const [memegraber, memegrab] = useState(props.Imgmeme);
 const mememaker = () =>  {
    fetch(props.Api)
    .then((res) => res.json())
    .then((data) => {
    
      memegrab(data.url)
    })
  };

  return (
    <>
  <div className="mt-20 flex-col justify-center items-center flex ">
   <img className="w-82 h-72" src={memegraber}/>
   <button className=" mt-5 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" onClick={mememaker}>Next meme</button>
   </div>

   </>
   
  )
}
export default MemeCard
