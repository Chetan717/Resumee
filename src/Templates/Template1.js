import React from "react";
import TemplateChoice from "../SelectionTemplate/TemplateChoice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import jsPDF from "jspdf";
import "react-toastify/dist/ReactToastify.css";
export default function Template1({
  // Aceessing the props from Editor2.js
  valueA,
  valueB,
  valueC,
  valueD,
  valueE,
  valueF,
  slide
}) {



  //Generate Pdf using JsPdf
  const genratePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#resumepage"), {
      callback: function (pdf) {
        // Atomaticaly saved By Resume User 
        pdf.save(valueB.fullname);
        // notification When Fun Call or Download Pdf
        toast.success("🦄 Resume Pdf Downloaded!");
      },
    });
};



  // getting selected Template or Page Id from Store(Redux Toolkit) - /Store/Slice/TemplateSelectionSlice.js

  const TempId = useSelector((state) => {
    return state.temps;
  });

  return (
    <>
      {/* notification toast style & position container */}
      <ToastContainer
        position="bottom-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="flex flex-col justify-center items-center mt- ">
        {/* Buttons */}
        
        
        
          <div className="flex flex-col m-1 lg:gap-1 ">

            {/* template Selection componenet which return a Buttons */}
            <div className="flex flex-row  lg:gap-8 ">

            <div className=" lg:block hidden ">
              <TemplateChoice />
            </div>

            {/* Download Buttons */}
            <button
              onClick={genratePdf}
              className="     btn  lg:btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans "
            >
              Download
            </button>
            </div>
            <div className="flex lg:block hidden flex-row m-1 gap-1">
            <p className="text-yellow-500 font-bold text-xs">{slide}%</p> 
          <input  type="range" min="0" max="100" value={slide} className="range range-xs range-success relative bg-yellow-300 lg:w-[400px]"/>
         
          </div>
          </div>
       

        {/*   Template Start   */}
        <div className="flex   justify-center w-[590px]  items-center">
          <div   className="flex   flex-col justify-center items-center  border-2 border-black rounded-[20px]  gap-7 w-full h-[520px] ">
            <div
          id="resumepage"
              className=" ml-16 flex flex-col justify-start items-start lg:scroll-smooth overflow-x-auto whitespace-nowrap"
            >
              {/*   Basic info  Start   */}
              <div     className="flex m-3 flex-row gap-[40px] justify-start">
                <div className="flex flex-col justify-start">
                  <div className="flex flex-row justify-start">
                    <h1 className="text-xl text-start text-black font-bold p-1">
                      {valueB.fullname}
                    </h1>
                    <p className="text-sm text-start text-black  p-1"></p>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h1 className="text-xs text-center text-black font-bold ">
                      {valueB.jobtitle}
                    </h1>
                    <p className="text-sm text-start text-black  p-1"></p>
                  </div>
                </div>
                <div className="flex flex-col relative justify-start">
                  <div className="flex flex-col justify-start">
                    <h1 className="text-xs text-start text-black ">
                      {valueB.city}
                    </h1>
                    <p className="text-xs text-start text-black  ">
                      {valueB.pincode}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start">
                    <h1 className="text-xs text-start text-black ">
                      {valueB.phone}
                    </h1>
                    <p className="text-xs w-[150px] text-start text-black   ">
                      {valueB.email}
                    </p>
                  </div>
                </div>
              </div>
              {/*   Basic info  End   */}


              {/*   Experiance info  Start   */}
              <div class=" flex flex-col m-1 ">
                <h1 class="sm:text-sm text- text-[17px] tracking-wide p- font-bold text-blue-500">
                  Experiance
                </h1>
                <div>
                  {valueC.map((key) => {
                    return (
                      <>
                        <p class=" text-sm leading-relaxed w-[500px] text-black ">
                          {key.company}
                        </p>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          {key.location} - {key.jobtit}
                        </p>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                        {key.discription}-{key.jobtype}-{key.start}-{key.end}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>

              {/*   Experiance info  End  */}


              {/*  Skills info  Start   */}

              <div class="flex flex-row m-1 ">
                <div class="  grid grid-cols-4  ">
                  <h1 class=" sm:text-sm text- text-[17px]  tracking-wide  font-bold text-blue-500">
                    Skills:
                  </h1>

                  {valueA?.map((key) => {
                    return (
                      <>
                        <p class=" text-xs  text-black ">{key.value}</p>
                      </>
                    );
                  })}
                </div>
              </div>
              {/*   Skills info  End  */}


              {/*   Education info  Start   */}
              <div class="  flex flex-col m-1">
                <div class=" flex flex-col  relative  items-start text-start">
                  <h1 class="title-f w-[500px]ont sm:text-sm text- text-[17px] w-[500px] tracking-wide p- font-bold text-blue-500">
                    Education
                  </h1>
                  {valueD.map((key) => {
                    return (
                      <>
                        <p class=" text-sm leading-relaxed w-[500px] text-black ">
                          {key.collage}
                        </p>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          {key.course} -{key.locationed}
                        </p>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          CGPA:{key.cgpa}
                        </p>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          From :{key.started} -{key.ended}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
              {/*   Education info  End   */}


              {/*   Project info  Start   */}

              <div class="flex flex-col justify-start items-start">
                <div class="   flex flex-col  relative  items-start text-start">
                  <h1 class="  sm:text-sm text- text-[17px] tracking-wide p- font-bold text-blue-500">
                    Projects
                  </h1>
                  {valueE.map((key) => {
                    return (
                      <>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          {key.project} - {key.links}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
              {/*   Project info  end   */}


              {/*   Additional Course info  Start   */}
              <div class=" flex flex-col m-1 ">
                <div class=" md:w-2/3  flex flex-col  relative items-start text-start">
                  <h1 class="title-f w-[500px]ont sm:text-sm text- text-[17px] w-[500px] tracking-wide p- font-bold text-blue-500">
                    Additional courses
                  </h1>

                  {valueF?.map((key) => {
                    return (
                      <>
                        <p class=" text-xs leading-relaxed w-[500px] text-black ">
                          {key.courses}-{key.description}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>

              {/*   Additional Course info  End   */}
            </div>
          </div>
        </div>
        {/* Template End */}
      </div>
    </>
  );
}
