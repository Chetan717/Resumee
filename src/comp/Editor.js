import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// optiopn of skill select in form
const options = [
  { label: "React.js", value: "React.js" },
  { label: "Javascript", value: "javacript" },
  { label: "Express.js", value: "javacript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "MongoDB", value: "mongodb" },
  { label: "Full Stack Devlopment", value: "full" },
  { label: "Frontend Devloper", value: "front" },
  { label: "Backend Devloper", value: "back" },
];

function Editor() {
  // state of multiple skill select in form
  const [selected, setSelected] = useState([]);

  // object state of all inputs in form
  const [resData, setResData] = useState({
    title: "",
    fname: "",
    lname: "",
    citya: "",
    email: "",
    mobile: "",
    psummary: "",
    jobtitle: "",
    employer: "",
    startdateex: "",
    enddateex: "",
    company: "",
    workex: "",
    descriptionex: "",
    school: "",
    degree: "",
    started: "",
    ended: "",
    city: "",
    course: "",
    skills: "",
    project: "",
    link: "",
  });

  const [mainRes, setMainRes] = useState([]);

  // states for validation in form
  const [nameErr, setNameErr] = useState(false);
  const [fner, setFner] = useState(false);
  const [lner, setLner] = useState(false);
  const [cit, setCit] = useState(false);
  const [ema, setEma] = useState(false);
  const [mo, setMo] = useState(false);
  const [ps, setPs] = useState(false);
  const [jt, setJt] = useState(false);
  const [em, setEm] = useState(false);

  const [com, setCom] = useState(false);

  const [dese, setDese] = useState(false);
  const [sch, setSch] = useState(false);
  const [deg, setDeg] = useState(false);

  const [city, setCity] = useState(false);
  const [course, setCourse] = useState(false);

  const [pro, setPro] = useState(false);
  const [lnk, setLnk] = useState(false);


  // handling onchange event and validations function
  const handleInput = (e) => {
    const name = e.target.name;
    {
      resData.title.length < 3 ? setNameErr(true) : setNameErr(false);
    }
    {
      resData.fname.length < 3 ? setFner(true) : setFner(false);
    }
    {
      resData.lname.length < 3 ? setLner(true) : setLner(false);
    }
    {
      resData.citya.length < 3 ? setCit(true) : setCit(false);
    }
    {
      resData.email.length < 3 ? setEma(true) : setEma(false);
    }
    {
      resData.mobile.length < 3 ? setMo(true) : setMo(false);
    }

    {
      resData.psummary.length < 10 ? setPs(true) : setPs(false);
    }
    {
      resData.jobtitle.length < 3 ? setJt(true) : setJt(false);
    }
    {
      resData.employer.length < 3 ? setEm(true) : setEm(false);
    }

    {
      resData.company.length < 3 ? setCom(true) : setCom(false);
    }
    {
      resData.descriptionex.length < 10 ? setDese(true) : setDese(false);
    }
    {
      resData.school.length < 3 ? setSch(true) : setSch(false);
    }
    {
      resData.degree.length < 3 ? setDeg(true) : setDeg(false);
    }

    {
      resData.city.length < 3 ? setCity(true) : setCity(false);
    }
    {
      resData.course.length < 3 ? setCourse(true) : setCourse(false);
    }

    {
      resData.project.length < 3 ? setPro(true) : setPro(false);
    }
    {
      resData.link.length < 3 ? setLnk(true) : setLnk(false);
    }

    const value = e.target.value;

    setResData({ ...resData, [name]: value });
  };

  // handlesubmit handle after submit activities
  const handleSubmit = (e) => {
  if(handleSubmit) { e.preventDefault();
    const Resumedata = { ...resData, id: new Date().getTime().toString() };
    SendDataLocal();
    SendskillsLocal();
    setMainRes({ ...mainRes, Resumedata });
    notify();
  
}
else{
notifyerr()
}

};
  const notify = () => toast.success("Details will be save !");
  const notifyerr = () => toast.info(" You can create a new now !");
  // clear all the filed when click on create New
  const clearAll = () => {
    setResData({
      title: "",
      fname: "",
      lname: "",
      citya: "",
      email: "",
      mobile: "",
      psummary: "",
      jobtitle: "",
      employer: "",
      startdateex: "",
      enddateex: "",
      company: "",
      workex: "",
      descriptionex: "",
      school: "",
      degree: "",
      started: "",
      ended: "",
      city: "",
      course: "",
      skills: "",
      project: "",
      link: "",
    });
    notifyerr()
  };

  //   // const OriginalData = mainRes;

  // sending the input data to the localstorage
  const SendDataLocal = () => {
    localStorage.setItem("ResData", JSON.stringify(resData));
  };
    // sending the input data to the localstorage
  const SendskillsLocal = () => {
    localStorage.setItem("ResSkill", JSON.stringify(selected));
  };

  return (
    <>
      <body className="bg-conic-gradient(at left top, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))">
      <ToastContainer
position="top-right"
autoClose={800}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <label
          onClick={clearAll}
          className="btn btn-primary capitalize lg:fixed lg:left-[1050px] lg:top-[100px] absolute top-[23px] left-[30px]"
        >
          Create new !
        </label>
        {/* form and input fields */}
        <form
          onSubmit={handleSubmit}
          class="w-full relative right-[120px] m-14 max-w-lg"
        >
          <h1 className="relative lg:text-end font-bold lg:text-2xl lg:p-0 lg:left-[0p] lg:top-[0px] top-[-30px] text-end top-[50px] ">
            Create Resume in just 4 Steps
          </h1>
          <div>
            <div
              class="accordion relative lg:w-[800px] lg:left-[180px] lg:top-[50px] w-[280px] left-[100px] top-[70px] "
              id="accordionPanelsStayOpenExample"
            >
              <div class="accordion-item  rounded ">
                <h2
                  class="accordion-header font-bold"
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    class="accordion-button   "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Personal Details
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body ">
                    <section class="text-gray-600 relative lg:right-[0px] body-font right-[90px]">
                      <h1 class="sm:text-3xl lg:text-2xl font-medium lg:left-[290px]   lg:text-center title-font text-gray-900 lg:mb-4 text-start relative left-[140px]   ">
                        Personal Details !
                      </h1>
                      <div class="container px-20 relative bottom-[80px] py-24 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 w-[275px]">
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">
                                Whats about job Title?
                              </span>
                            </label>
                            <input
                              name="title"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              maxLength={25}
                              value={resData.title}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {nameErr ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 Charactes !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">First name</span>
                            </label>

                            <input
                              name="fname"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              maxLength={25}
                              value={resData.fname}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {fner ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 Charactes !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Last name</span>
                            </label>

                            <input
                              name="lname"
                              autoComplete="off"
                              onChange={handleInput}
                              maxLength={25}
                              value={resData.lname}
                              required
                              class="bg-gray-100  input-bordered input-info rounded flex p-4  w-full h-[] items-center"
                            ></input>
                            {lner ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 Charactes !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">city</span>
                            </label>

                            <input
                              name="citya"
                              autoComplete="off"
                              onChange={handleInput}
                              maxLength={15}
                              value={resData.citya}
                              required
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                            ></input>
                            {cit ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 Charactes !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>

                            <input
                              name="email"
                              autoComplete="off"
                              onChange={handleInput}
                              value={resData.email}
                              maxLength={40}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                              required
                            ></input>
                            {ema ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Email should be valid !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Mobile No.</span>
                            </label>

                            <input
                              name="mobile"
                              autoComplete="off"
                              onChange={handleInput}
                              type="number"
                              maxLength={15}
                              value={resData.mobile}
                              class="bg-gray-100  input-bordered input-info rounded  flex p-4 h-[] w-full items-center"
                            ></input>
                            {mo ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter valid phone number!
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 lg:w-full ">
                            <label className="label">
                              <span className="label-text">
                                Profesional summary
                              </span>
                            </label>
                            <textarea
                              name="psummary"
                              onChange={handleInput}
                              value={resData.psummary}
                              type="text"
                              maxLength={105}
                              class="bg-gray-100 rounded textarea-info flex p-4 h-[] lg:w-[380px] items-center w-[260px]"
                            ></textarea>
                            {ps ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 10 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        </div>
                        <button className="btn flex mx-auto mt-16  py-2 px-8 hover:bg-[#40A5DD] bg-[#FDE707] hover:text-white text-black capitalize">
                          Save Details !
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/*  */}

              <div class="accordion-item ">
                <h2
                  class="accordion-header font-bold"
                  id="panelsStayOpen-headingTwo"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Experiance and Skills
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body  ">
                    <section class="text-gray-600 relative lg:right-[0px] right-[90px] body-font">
                      <h1 class="sm:text-3xl lg:text-2xl font-medium lg:text-center title-font text-gray-900 mb-4 relative lg:left-[10px] left-[125px]">
                        Experiance And Skills !
                      </h1>
                      <div class="container px-20 relative bottom-[80px]  py-24 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 w-[275px]">
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Job title</span>
                            </label>

                            <input
                              name="jobtitle"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              value={resData.jobtitle}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {jt ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Job Role</span>
                            </label>

                            <input
                              name="employer"
                              autoComplete="off"
                              onChange={handleInput}
                              value={resData.employer}
                              required
                              type="text"
                              maxLength={35}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {em ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 2 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Start Date </span>
                            </label>

                            <input
                              name="startdateex"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              value={resData.startdateex}
                              type="date"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4  w-full h-[] items-center"
                            ></input>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">End Date</span>
                            </label>

                            <input
                              name="enddateex"
                              autoComplete="off"
                              onChange={handleInput}
                              value={resData.enddateex}
                              required
                              type="date"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                            ></input>
                          </div>

                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Company </span>
                            </label>

                            <input
                              name="company"
                              autoComplete="off"
                              onChange={handleInput}
                              type="text"
                              maxLength={35}
                              value={resData.company}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                            ></input>

                            {com ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 2 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>

                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Description</span>
                            </label>
                            <textarea
                              name="descriptionex"
                              onChange={handleInput}
                              value={resData.descriptionex}
                              maxLength={105}
                              type="text"
                              class="bg-gray-100 rounded textarea-info   flex p-4 h-[] lg:w-[250px] w-[260px] items-center"
                            ></textarea>

                            {dese ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 10 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        </div>
                        <button className="btn flex mx-auto mt-16  py-2 px-8 hover:bg-[#40A5DD] bg-[#FDE707] hover:text-white text-black capitalize">
                          Save Details !
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div class="accordion-item ">
                <h2
                  class="accordion-header font-bold"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Education And Courses
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body  ">
                    <section class="text-gray-600 relative body-font lg:right-[0px] right-[90px]">
                      <h1 class="sm:text-3xl lg:text-2xl font-medium text-center title-font text-gray-900 mb-4">
                        Education And Courses !
                      </h1>
                      <div class="container px-20 relative bottom-[80px] py-24 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 w-[275px]">
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">School</span>
                            </label>

                            <input
                              name="school"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              value={resData.school}
                              maxLength={35}
                              type="text"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {sch ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Degree</span>
                            </label>

                            <input
                              name="degree"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              value={resData.degree}
                              maxLength={25}
                              type="text"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {deg ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Start Date</span>
                            </label>

                            <input
                              name="started"
                              autoComplete="off"
                              type="date"
                              required
                              onChange={handleInput}
                              value={resData.started}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4  w-full h-[] items-center"
                            ></input>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">End Date</span>
                            </label>

                            <input
                              name="ended"
                              autoComplete="off"
                              type="date"
                              required
                              onChange={handleInput}
                              value={resData.ended}
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                            ></input>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">City</span>
                            </label>

                            <input
                              name="city"
                              autoComplete="off"
                              onChange={handleInput}
                              required
                              value={resData.city}
                              maxLength={25}
                              type="text"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 h-[] w-full items-center"
                            ></input>
                            {city ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Course</span>
                            </label>

                            <input
                              name="course"
                              autoComplete="off"
                              onChange={handleInput}
                              value={resData.course}
                              type="text"
                              maxLength={45}
                              class="bg-gray-100  input-bordered input-info rounded  flex p-4 h-[] w-full items-center"
                            ></input>
                            {course ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter atleast 3 characters !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">
                                Skills(Technologies)
                              </span>
                            </label>

                            <MultiSelect
                              options={options}
                              value={selected}
                              required
                              onChange={setSelected}
                              labelledBy="Select"
                            />
                            
                          </div>
                        </div>
                        <button className="btn flex mx-auto mt-16  py-2 px-8 hover:bg-[#40A5DD] bg-[#FDE707] hover:text-white text-black capitalize">
                          Save Details !
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div class="accordion-item  ">
                <h2
                  class="accordion-header font-bold"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Projects
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body  ">
                    <section class="text-gray-600 relative body-font">
                      <h1 class="sm:text-3xl lg:text-2xl font-medium lg:text-center title-font text-gray-900 mb-4">
                        Project !
                      </h1>
                      <div class="container px-20 relative bottom-[80px] lg:right-[0px] right-[90px] py-24 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 w-[275px]">
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Project Name</span>
                            </label>

                            <input
                              name="project"
                              autoComplete="off"
                              onChange={handleInput}
                              value={resData.project}
                              maxLength={45}
                              required
                              type="text"
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {pro ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter 3 character atleast !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <label className="label">
                              <span className="label-text">Github Links</span>
                            </label>

                            <input
                              name="link"
                              autoComplete="off"
                              onChange={handleInput}
                              type="url"
                              maxLength={205}
                              value={resData.link}
                              required
                              class="bg-gray-100  input-bordered input-info rounded flex p-4 w-full h-[] items-center"
                            ></input>
                            {lnk ? (
                              <label className="label">
                                {" "}
                                <span className="label-text-alt text-[#FF0000]">
                                  Enter valid url !
                                </span>
                              </label>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        </div>
                        <button onSubmit={handleSubmit} className="btn flex mx-auto mt-16  py-2 px-8 hover:bg-[#40A5DD] bg-[#FDE707] hover:text-white text-black capitalize">
                          Save Details !
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <section></section>
      </body>
    </>
  );
}

export default Editor;
