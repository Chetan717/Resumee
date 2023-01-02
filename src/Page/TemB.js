
// template 2 nd  ##

import React from "react";
import Editor from "../comp/Editor";
import { useEffect } from "react";
import { useState } from "react";
import jsPDF from "jspdf";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TemB() {
  // get data from localstorage and save in states
  const getData = () => {
    const Datas = localStorage.getItem("ResData");
    setGetval(JSON.parse(Datas));
    const Skilldata = localStorage.getItem("ResSkill");
    setValskill(JSON.parse(Skilldata));
  };

  useEffect(() => {
    getData();
  }, []);

   // states for store localstorage items
  const [getval, setGetval] = useState([]);
  const [valskill, setValskill] = useState([]);

  console.log(getval, valskill);

  //  pdf generating function using jsPdf package
  const genratePdf =  () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#resumepage"), {
      callback: function (pdf) {
        pdf.save("Resume.pdf");
        toast.success(" Pdf are Downloaded !");
      },
    });
  };

  return (
    <>
   {/* import editor on the page */}
      <Editor />
      <section>
        <label
          htmlFor="my-modal-5"
          onClick={getData}
          className="btn btn-md bg-[#FDE707] hover:bg-[#FDE706] fixed  text-black   capitalize font-sans lg:-[1050px] lg:top-[160px] lg:left-[1050px] left-[160px] top-[23px]"
        >
          Preview Resume !
        </label>

        {/* model to click on preview resume btn */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-[1400px] max-w-5xl h-[800px] flex justify-start  ">
            {/* template value distrubuted by localstorage vitems */}
            <div className="relative  w-[550px] m-4 h-[740px] bg-white border rounded-[10px] flex  ">
              <div
                id="resumepage"
                className="relative  w-[550px] m-4 h-[690px] bg-white  "
              >
                <section class="text-gray-600 body-font relative bottom-[10px]">
                  <div class="container px-2 py- mx-auto">
                    <div class="flex-grow pl-6 px-1 py-3">
                      <h2 class="text-gray-900 text-[16px] title-font font-medium mb-1">
                        {getval.fname} {getval.lname}
                      </h2>
                      <h2 class="text-gray-900 text-xs title-font font-medium mb-">
                        {getval.jobtitle}
                      </h2>
                      <p class=" w-[450px] text-gary-500 text-xs inline-flex mb-">
                        {getval.citya}
                      </p>
                      <p class=" w-[450px] text-gary-500 text-xs inline-flex mb-1">
                        {getval.mobile}
                      </p>
                      <p class=" w-[450px] text-gary-500 text-xs inline-flex  mb-1">
                        {getval.email}
                      </p>
                      <p class=" w-[450px] text-gray-500 text-xs mb-">
                        {getval.psummary}
                      </p>
                      <p class="mt- text-blue-800 inline-flex items-center">
                        LinkedIn
                      </p>
                    </div>

                    <div class="flex-grow pl-6 px-1 py-3">
                      <h2 class="text-gray-900 text-[15px] title-font font-medium mb-1">
                        Work Experiance
                      </h2>
                      <h2 class="text-gray-900 text-xs title-font font-medium mb-1">
                        {getval.employer}
                      </h2>

                      <p class=" w-[450px] text-gray-500 text-xs">
                        {getval.descriptionex}
                      </p>
                      <div class="mt- text-[10px] text-blue-800 inline-flex ">
                        <p>
                          {getval.startdateex}
                          {" -"}
                        </p>

                        <p> {getval.enddateex}</p>
                      </div>
                      <p class=" w-[450px] text-gray-500 text-xs">
                        {getval.company}
                      </p>
                    </div>
                    <div class="flex-grow pl-6 px-1 py-3">
                      <h2 class="text-gray-900 text-[15px] title-font font-medium mb-1 w-[200px]">
                        Education & Courses{" "}
                      </h2>
                      <h2 class="text-gray-900 text-xs title-font font-medium mb-1 w-[300px]">
                        {getval.school}-{getval.degree}-{getval.city}
                      </h2>

                      <p class=" w-[450px] text-blue-500 text-xs">
                        {getval.course}
                      </p>
                      <div class="mt- text-[10px] text-blue-800 inline-flex ">
                        <p>
                          {getval.started}
                          {" -"}
                        </p>

                        <p> {getval.ended}</p>
                      </div>
                    </div>
                    <div class="flex flex-col pl-6 px-1 py-3">
                      <h2 class="text-gray-900 text-sm title-font font-medium mb-1 w-[200px]">
                        Skills And Technologies
                      </h2>

                      {!valskill ? null : (
                        <div class="mt-1 text-gray-500 text-xs flex  w-[300px]  h-[50px]  ">
                          {valskill.map((elm) => {
                            return (
                              <>
                                <p class="">{elm.label}</p>,
                              </>
                            );
                          })}{" "}
                        </div>
                      )}
                    </div>

                    <div class="flex-grow pl-6 px-1 py-3">
                      <h2 class="text-gray-900 text-[15px] title-font font-medium mb-1 w-[200px]">
                        Projects
                      </h2>
                      <div class="mt- text-[12px] text-blue-800 flex-col w-[400px] ">
                        <p>
                          {" "}
                          {getval.project} {" -"}
                        </p>

                        <p>{getval.link}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="modal-action flex justify-start relative  m-3">
            {/* button which back to edit  */}
            <label
              htmlFor="my-modal-5"
              className="btn btn-primary fixed capitalize fixed left-[990px] top-[500px] "
            >
              Back To Edit
            </label>
            {/* btn which download the pdf calling generatepdf function */}
            <label
              onClick={genratePdf}
              className="btn btn-md bg-[#FDE707] hover:bg-[#FDE707] text-black fixed left-[830px] top-[500px]  hover:text-black capitalize font-sans"
            >
              Download Pdf
            </label>
          </div>

        </div>
      </section>
    </>
  );
}
