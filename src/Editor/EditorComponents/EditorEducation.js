import React from 'react'

export default function EditorEducation({eduinput,handleAddClickEdu,handleInputChangeEdu,handleRemoveClickEdu,erroreduinput}) {

  return (
    <>
          <h1 className="text-yellow-500 font-bold">Add Education !</h1>
    
          <div className="flex flex-col  justify-center items-center rounded-[20px] top-32 left-4  bg-black shadow-xl ">
            {eduinput.map((x, i) => {
              return (
                <div className="flex flex-row box">
                  <div class="grid grid-cols-2 gap-10 z-0  mb-6 group">
                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.collage}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                        onFocus={() => (erroreduinput.collage = true)}
                        type="text"
                        maxLength='50'
                        name="collage"
                        id="floating_email"
                        autoComplete="off"
                        class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Collage Name
                      </label>
                      <label for="" class=" text-xs text-red-500">
            {erroreduinput.collage === true
              ? x.collage<=3
                ? "Enter Collage Name ❌"
                : null
                ? x.collage<5
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 

                    </div>
                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.course}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                         onFocus={() => (erroreduinput.course = true)}
                        type="text"
                        name="course"
                        id="floating_email"
                        autoComplete="off"
                        class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Course/Degree/Diploma
                      </label>
                       <label for="" class=" text-xs text-red-500">
            {erroreduinput.course === true
              ? x.course<=5
                ? "Enter Your Course/Degree/Diploma ❌"
                : null
                ? x.course> 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 
                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.locationed}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                        onFocus={() => (erroreduinput.locationed = true)}
                        type="text"
                        name="locationed"
                        maxLength='15'
                        id="floating_email"
                        autoComplete="off"
                        class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Location/City
                      </label>
 
                      <label for="" class=" text-xs text-red-500">
            {erroreduinput.locationed === true
              ? x.locationed <=3
                ? "Enter Your locationed ❌"
                : null
                ? x.locationed.length > 2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.cgpa}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                         onFocus={() => (erroreduinput.cgpa=true)}
                        type="text"
                        maxLength="4"
                        name="cgpa"
                        id="floating_email"
                        autoComplete="off"
                        class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Percentage/CGPA
                      </label>

                      <label for="" class=" text-xs text-red-500">
            {erroreduinput.cgpa === true
              ? x.cgpa<=2
                ? "Enter Your cgpa/% ❌"
                : null
                ? x.cgpa > 2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group ">
                      <input
                        value={x.started}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                         onFocus={() => (erroreduinput.started= true)}
                        datepicker
                        name="started"
                        type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium   text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Start Date
                      </label>


                      <label  class=" m-2 text-xs text-red-500">
            {erroreduinput.started === true
              ? x.started <=2
                ? "Select Date"
                : null
                ? x.started<2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group ">
                      <input
                        value={x.ended}
                        onChange={(e) => handleInputChangeEdu(e, i)}
                         onFocus={() => (erroreduinput.ended= true)}
                        datepicker
                        name="ended"
                        type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium  m-2 text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        End Date
                      </label>

                      <label  class=" m-2 text-xs text-red-500">
            {erroreduinput.ended === true
              ? x.ended <=1
                ? "Select Date"
                : null
                ? x.ended<2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label> 


                    </div>

                    <div className="btn-box flex flex-row gap-3 m-9">
                      {eduinput.length !== 1 && (
                        <img
                          onClick={() => handleRemoveClickEdu(i)}
                          className="mr10 w-7 h-7 cursor-pointer"
                          src="https://img.icons8.com/material-outlined/24/FA5252/trash--v1.png"
                        />
                      )}
                      {eduinput.length - 1 === i && (
                        <img
                          onClick={handleAddClickEdu}
                          className="mr10 w-7 h-7 cursor-pointer"
                          src="https://img.icons8.com/color/48/null/plus--v1.png"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>



    
    
    </>
  )
}
