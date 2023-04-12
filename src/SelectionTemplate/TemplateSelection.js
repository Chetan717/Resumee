import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TmpId } from "../Store/Slices/TemplateSelectionSlice";
function TemplateSelection() {

  const dispatch = useDispatch()

  const resumeeData = localStorage.getItem("resumeeData")

  const mainResumeData= JSON.parse(resumeeData);



 
const getIds =(id)=>{
dispatch(TmpId(id))

}

return (
    <>

{/* The button to open modal */}
<div className="  flex justify-center items-center">
<label htmlFor="my-modal" className="btn relative  m-1    btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans ">Recent Edit<img src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/1A1A1A/external-edit-social-media-ui-tanah-basah-glyph-tanah-basah.png' className="w-5 h-5 m-1"/></label>

</div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   
    
    <p className="py-4">This Feature is comming Soon !</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn  m-1    btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans">Yay!</label>
    </div>

  </div>
</div>

      <div class="flex justify-center items-center mt-10 ">
        <div class="grid lg:grid-cols-3 grid-cols-1   gap-[100px]">
          <Link to={`/Editor/${'1'}`}>
            <div onClick={()=>getIds("1")} class="w-[300px]">
              <img
           
                src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px] hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>
          </Link>
          <Link to={`/Editor/${"2"}`}>
            <div    onClick={()=>getIds("2")} class="w-[300px]">
              <img
              
                src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>
          </Link>

          <Link to={`/Editor/${"3"}`}>
            <div    onClick={()=>getIds("3")} class="w-[300px]">
              <img
              
                src="https://www.jobhero.com/webpages/images/resume-examples/administrative_assistant_example_resume_JH_default.svg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500   "
              />
            </div>
          </Link>
          <Link to={`/Editor/${"4"}`}>
            <div    onClick={()=>getIds("4")} class="w-[300px]">
              <img
              
                src="https://cdn.enhancv.com/ivy_league_cover_letter_template_1_439b5cab58.png"
                className="w-[300px] h-[350px] hover:animate-pulse  rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3  "
              />
            </div>
          </Link>
          <Link to={`/Editor/${"5"}`}>
            <div    onClick={()=>getIds("5")} class="w-[300px]">
              <img
              
                src="https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv20.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>
          </Link>
          <Link to={`/Editor/${"6"}`}>
            <div    onClick={()=>getIds("6")} class="w-[300px]">
              <img
              
                src="https://huntsman.usu.edu/start/images/business-template.png"
                className="w-[300px] h-[350px] hover:animate-pulse  rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TemplateSelection;
