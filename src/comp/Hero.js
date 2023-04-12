import React from 'react'
import img from '../images/gifhero.gif'
export default function Hero() {
  return (
    <>
    {/* hero section of application */}
 <div className="flex flex-col hero relative top-[10px] h-full bg-white justify-items-center">

  <div className="hero-content  text-center">
    <div className="max-w-md">
    <h1 class= "font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Resume with Beautiful ready-to-use resume templates !</h1>
    
    <p className="py-4 text-[15px] font-medium">Use professional field-tested resume templates  follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
     {/* <img className='relative bottom-[105px h-300px] w-full ' src={img}></img>
     */}
 
    </div>
  </div>
</div>

    </>
  )
}
