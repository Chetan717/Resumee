import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";

import EditorBaseInfo from "../Editor/EditorComponents/EditorBaseInfo";
import EditorExperiance from "../Editor/EditorComponents/EditorExperiance";
import EditorEducation from "../Editor/EditorComponents/EditorEducation";
import EditorCourse from "../Editor/EditorComponents/EditorCourse";
import EditorSkill from "../Editor/EditorComponents/EditorSkill";
import EditorProject from "../Editor/EditorComponents/EditorProject";
import { isObject } from "formik";

export default function Editor2() {

  
  // state for slide progress resume
  const [slide, setSlide] = useState("0");


   // getting selected Template or Page Id from Store(Redux Toolkit) - /Store/Slice/TemplateSelectionSlice.js
  const TempId = useSelector((state) => {
  
    return state.temps;
  
  });

  const id = TempId;

  

  //------------------------------------// baseData Section Start-------------------------------------------

  const [baseData, setBaseData] = useState({
    fullname: "",
    jobtitle: "",
    city: "",
    pincode: "",
    phone: "",
    email: "",
  });

  // validation of base Data

  const [errorbaseData, setErrorBaseData] = useState({
    fullname: false,
    jobtitle: false,
    city: false,
    pincode: false,
    phone: false,
    email: false,
  });

  // handle onchange of baseData info
  const handlebaseInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBaseData({ ...baseData, [name]: value });
    if (!value) {
      setSlide(slide - 20);
    } else {
      setSlide(20);
    }
  };

  //---------------------------------------------baseData Section End-------------------------------------

  //------------------------------------// Experiance Section Start-------------------------------------------

  const [inputList, setInputList] = useState([
    {
      company: "",
      location: "",
      jobtit: "",
      jobtype: " ",
      discription: "",
      start: "",
      end: "",
    },
  ]);

  // validation for experiance
  const [errorinputList, setErrorinputList] = useState([
    {
      company: false,
      location: false,
      jobtit: false,
      jobtype: false,
      discription: false,
      start: false,
      end: false,
    },
  ]);

  // handle input change Experiance inputs
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    if (!value) {
      setSlide(slide - 20);
    } else {
      setSlide("40");
    }
  };

  // handle click event of the Remove button --- Experiance inputs
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    // list.splice(index, 1);
    setInputList(remove);
  };

  // handle click event of the Add button--- Experiance inputs
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        company: "",
        location: "",
        jobtit: "",
        jobtype: " ",
        discription: "",
        start: "",
        end: "",
      },
    ]);
  };

  //------------------------------------------------- Experiance Section End-------------------------------------

  //------------------------------------ Education Section Start-------------------------------------------

  const [eduinput, setEduinput] = useState([
    {
      collage: "",
      locationed: "",
      course: "",
      cgpa: " ",
      started: "",
      ended: "",
    },
  ]);

  const [erroreduinput, setErroreduinput] = useState([
    {
      collage: false,
      locationed: false,
      course: false,
      cgpa: false,
      started: false,
      ended: false,
    },
  ]);

  // handle input change -------- education inputs
  const handleInputChangeEdu = (e, index) => {
    const { name, value } = e.target;
    const edulist = [...eduinput];
    edulist[index][name] = value;
    setEduinput(edulist);
    if (!value) {
      setSlide(slide - 20);
    } else {
      setSlide("60");
    }
  };

  // handle click event of the Remove button ---------------Education inputs
  const handleRemoveClickEdu = (index) => {
    const edulist = [...eduinput];
    const remove = edulist.filter((_, indexFilter) => !(indexFilter === index));
    // list.splice(index, 1);
    setEduinput(remove);
  };

  // handle click event of the Add button ------------------ education inputs
  const handleAddClickEdu = () => {
    setEduinput([
      ...eduinput,
      {
        company: "",
        location: "",
        jobtit: "",
        jobtype: " ",
        start: "",
        end: "",
      },
    ]);
  };

  //---------------------------------------------------- Education Section End-------------------------------------

  //------------------------------------Project Section Start-------------------------------------------

  const [inputListPro, setInputListPro] = useState([
    { project: "", descriptionPro: "", links: "" },
  ]);

  // validation for project inputs

  const [inputListProError, setInputListProError] = useState([
    { project: false, descriptionPro: false, links: false },
  ]);

  // handle input change ------- Project
  const handleInputChangePro = (e, index) => {
    const { name, value } = e.target;
    const prolist = [...inputListPro];
    prolist[index][name] = value;
    setInputListPro(prolist);
    if (!value) {
      setSlide(slide - 20);
    } else {
      setSlide("100");
    }
  };

  // handle click event of the Remove button ------- Project
  const handleRemoveClickPro = (index) => {
    const listpro = [...inputListPro];
    const remove = listpro.filter((_, indexFilter) => !(indexFilter === index));
    // list.splice(index, 1);
    setInputListPro(remove);
  };

  // handle click event of the Add button
  const handleAddClickPro = () => {
    setInputListPro([
      ...inputListPro,
      { project: "", descriptionPro: "", links: "" },
    ]);
  };

  //-------------------------------- // Project Section End-------------------------------------

  //------------------------------------// Course Section Start-------------------------------------------

  const [inputListCourse, setInputListCourse] = useState([
    { courses: "", description: "" },
  ]);

  // validation course
  const [inputListCourseError, setInputListCourseError] = useState([
    { courses: false, description: false },
  ]);

  // handle input change Course
  const handleInputChangeCourse = (e, index) => {
    const { name, value } = e.target;
    const Courselist = [...inputListCourse];
    Courselist[index][name] = value;
    setInputListCourse(Courselist);
    if (!value) {
      setSlide(slide - 20);
    } else {
      setSlide("80");
    }
  };

  // handle click event of the Remove button Course
  const handleRemoveClickCourse = (index) => {
    const Coulist = [...inputListCourse];
    const remove = Coulist.filter((_, indexFilter) => !(indexFilter === index));
    // list.splice(index, 1);
    setInputListCourse(remove);
  };

  // handle click event of the Add button Course
  const handleAddClickCourse = () => {
    setInputListCourse([...inputListCourse, { courses: "", description: "" }]);
  };

  //-------------------------------- // Course Section End-------------------------------------

  // state of multiple skill select in form
  const [selected, setSelected] = useState([""]);

  return (
    <>
      <Link
        to="/"
        className="text-black cursor-pointer  lg:text-xl m-2 ml-6 text-xs flex justify-start items-start top-[15px] font-bold"
      >
        Back to Home
      </Link>

      <div className=" lg:hidden   flex justify-center items-center">
        <label
          htmlFor="my-modal"
          className="btn relative  m-1    btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans "
        >
          View Resume
        </label>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 justify-start items-start bg-white m-1 lg:m-2 relative top-0 ">
        <div className="flex   flex-col gap-10 justify-center items-center lg:rounded-[30px] rounded-[20px] lg:w-[700px] lg:m-2 lg:mb-0 mb-10 w-full bg-black">
          <h1 className="text-white lg:text-2xl text-xl relative top-[50px]  font-bold">
            Edit Your Resume with Editor !
          </h1>

          <div className="flex flex-col  justify-center mt-[100px] items-center rounded-[20px] top-32 left-4  bg-black shadow-xl ">
            <h1 className="text-yellow-500 mb-[20px] font-bold">
              Add Profile Info !
            </h1>

            <EditorBaseInfo
              baseData={baseData}
              errorbaseData={errorbaseData}
              handlebaseInputChange={handlebaseInputChange}
            />
          </div>

          <EditorExperiance
            handleInputChange={handleInputChange}
            inputList={inputList}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
            errorinputList={errorinputList}
          />

          <EditorEducation
            eduinput={eduinput}
            handleInputChangeEdu={handleInputChangeEdu}
            handleAddClickEdu={handleAddClickEdu}
            handleRemoveClickEdu={handleRemoveClickEdu}
            erroreduinput={erroreduinput}
          />

          <EditorCourse
            handleInputChangeCourse={handleInputChangeCourse}
            inputListCourse={inputListCourse}
            handleAddClickCourse={handleAddClickCourse}
            handleRemoveClickCourse={handleRemoveClickCourse}
            inputListCourseError={inputListCourseError}
          />

          <EditorSkill selected={selected} setSelected={setSelected} />

          <EditorProject
            inputListPro={inputListPro}
            handleInputChangePro={handleInputChangePro}
            handleAddClickPro={handleAddClickPro}
            handleRemoveClickPro={handleRemoveClickPro}
            inputListProError={inputListProError}
          />
        </div>

        {/* web responsive template section Start */}

        <div className="lg:block hidden">
          {id === "1" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template1
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                slide={slide}
              />
            </div>
          ) : null}

          {id === "2" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template2
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                slide={slide}
              />
            </div>
          ) : null}

          {id === "3" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template3
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                valueG={id}
                slide={slide}
              />
            </div>
          ) : null}
          {id === "4" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template4
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                valueG={id}
                slide={slide}
              />
            </div>
          ) : null}

          {id === "5" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template5
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                valueG={id}
                slide={slide}
              />
            </div>
          ) : null}

          {id === "6" ? (
            <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
              <Template6
                valueA={selected}
                valueB={baseData}
                valueC={inputList}
                valueD={eduinput}
                valueE={inputListPro}
                valueF={inputListCourse}
                valueG={id}
                slide={slide}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* web responsive  template section End */}

      {/* mobile responsive template section Start */}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-full">
          <div className="lg:hidden ">
            {id === "1" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template1
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                />
              </div>
            ) : null}

            {id === "2" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template2
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                />
              </div>
            ) : null}

            {id === "3" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template3
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                  valueG={id}
                />
              </div>
            ) : null}
            {id === "4" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template4
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                  valueG={id}
                />
              </div>
            ) : null}

            {id === "5" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template5
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                  valueG={id}
                />
              </div>
            ) : null}

            {id === "6" ? (
              <div className="flex rounded-[20px]  fixed top-0 m-3 justify-start items-start w-[600px] h">
                <Template6
                  valueA={selected}
                  valueB={baseData}
                  valueC={inputList}
                  valueD={eduinput}
                  valueE={inputListPro}
                  valueF={inputListCourse}
                  valueG={id}
                />
              </div>
            ) : null}
          </div>

          <div className="modal-action absolute m-2">
            <label
              htmlFor="my-modal"
              className="btn  relative lg:bottom-0 bottom-4   btn btn-md bg-[#40A5DD] hover:bg-[#FDE707] hover:text-black capitalize font-sans"
            >
              Back
            </label>
          </div>
        </div>

        {/* mobile responsive template section End*/}
      </div>
    </>
  );
}
