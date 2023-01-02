import React from 'react'
import {Link} from 'react-router-dom'


export default function Templates() {

  return (
    <>
 
{/* templates in the application which selects can edit the resume ! */}

 <section class="text-gray-600 relative bottom-[100px] body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-Roboto title-font mb-4 font-bold relative top-[30px] text-black font-sans">Select a Own Templates</h1>
     
    </div>
  <div class="flex flex-wrap -m-4 text-center">

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
         < img className='w-full h-full' src="https://spa-assets.cakeresume.com/assets/2e93f2240702aa7ff8b5854bd9522a03.png" alt="resume"/>
          
      <Link to='/Page/TemB'className="  relative   btn btn-md bg-[#40A5DD] hover:bg-[#FDE707]  hover:text-black capitalize font-sans ">Use This Template</Link>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        < img className='w-full h-full ' src="https://spa-assets.cakeresume.com/assets/e3ad6d5cdf8794c1a9511854282dd6c9.png" alt="resume"/>
      <Link to='/Page/TemplateA' className="  m-1 relative   btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans ">Use This Template</Link>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
         < img className='w-full h-full' src="https://spa-assets.cakeresume.com/assets/856f5e3414b8a0aea08f76385c9267e3.png" alt="resume"/>
      <Link to='/Page/TemC' className= " relative m-1  btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans">Use this Template</Link>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
         < img className='w-full h-full' src="https://spa-assets.cakeresume.com/assets/16bd434c5efec78e5c139e9d0cb12b86.png" alt="resume"/>
      <Link to='/Page/TemD' className=" relative   btn btn-md bg-[#40A5DD] hover:bg-[#FDE707]  hover:text-black capitalize font-sans">Use This Template</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<h1 className='text-3xl text-center font-bold font-mono p-2 '>Resumee.</h1>



    </>
  )
}
