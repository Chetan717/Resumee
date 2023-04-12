import React from 'react'

export default function EditorExperiance({handleInputChange,inputList,errorinputList,handleAddClick,handleRemoveClick}) {

 


  return (
    <>
    
    
    <h1 className="text-yellow-500 font-bold">Add Experiance !</h1>
    <div className="flex flex-col  justify-center items-center rounded-[20px] top-32 left-4  bg-black shadow-xl ">
            {inputList.map((x, i) => {
              return (
                <div className="flex flex-row box">
                  <div class="grid grid-cols-2 gap-10 z-0  mb-6 group">
                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.company}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.company = true)}
                        type="text"
                        maxLength='30'
                        name="company"
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
                        Company Name
                      </label>
                      <label for="" class=" text-xs text-red-500">
            {errorinputList.company === true
              ? x.company.length <=3
                ? "enter at least 3 character ❌"
                : null
                ? x.company.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>
                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.jobtit}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.jobtit = true)}
                        type="text"
                        maxLength='30'
                        name="jobtit"
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
                        Job Title
                      </label>

                      <label for="" class=" text-xs text-red-500">
            {errorinputList.jobtit === true
              ? x.jobtit.length <=3
                ? "enter at least 3 character ❌"
                : null
                ? x.jobtit.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.location}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.location = true)}
                        type="text"
                        maxLength='15'
                        name="location"
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


                      <label  class=" text-xs text-red-500">
            {errorinputList.location === true
              ? x.location.length <=3
                ? "enter at least 3 character ❌"
                : null
                ? x.location.length<10
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>


                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.jobtype}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.jobtype = true)}
                        type="text"
                        maxLength="6"
                        name="jobtype"
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
                        jobType
                      </label>

                      <label  class=" text-xs text-blue-500">
            {errorinputList.jobtype === true
              ? x.jobtype.length <=5
                ? "-> Onsite/Remote/Hybrid"
                : null
                ? x.jobtype.length<4
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group ">
                      <input
                        value={x.start}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.start = true)}
                        datepicker
                        name="start"
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
            {errorinputList.start === true
              ? x.start.length <=1
                ? "Select Date"
                : null
                ? x.start.length<2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group ">
                      <input
                        value={x.end}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.end = true)}
                        datepicker
                        name="end"
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
            {errorinputList.end === true
              ? x.end.length <=1
                ? "Select Date"
                : null
                ? x.end.length<2
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>

                    <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
                      <input
                        value={x.discription}
                        onChange={(e) => handleInputChange(e, i)}
                        onFocus={() => (errorinputList.discription = true)}
                        type="textarea"
                        name="discription"
                        maxLength='200'
                        id="floating_email"
                        autoComplete="off"
                        class="block py-2.5 px-0 w-full h-[100px] rounded-[20px] text-sm text-yellow-500 font-bold bg-transparent  border border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium  p-1 mt-1 text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Description
                      </label>


                      <label  class=" m-2 text-xs text-red-500">
            {errorinputList.discription === true
              ? x.discription.length<=10
                ? "enter atleast 10 character ❌"
                : null
                ? x.discription.length<10
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

                    </div>

                    <div className="btn-box flex flex-row gap-3 m-9">
                      {inputList.length !== 1 && (
                        <img
                          onClick={() => handleRemoveClick(i)}
                          className="mr10 w-7 h-7 cursor-pointer"
                          src="https://img.icons8.com/material-outlined/24/FA5252/trash--v1.png"
                        />
                      )}
                      {inputList.length - 1 === i && (
                        <img
                          onClick={handleAddClick}
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
