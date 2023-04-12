import React from 'react'

export default function EditorProject({handleAddClickPro,inputListPro,handleRemoveClickPro,handleInputChangePro,inputListProError}) {
  return (
<>

<h1 className="text-yellow-500 font-bold">Add Project !</h1>

<div className="flex flex-col  justify-center items-center rounded-[20px] top-32 left-4  bg-black shadow-xl ">
  {inputListPro.map((x, i) => {
    return (
      <div className="flex flex-row box">
        <div class="grid grid-cols-2 gap-10 z-0  mb-6 group">
          <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
            <input
              value={x.project}
              onChange={(e) => handleInputChangePro(e, i)}
              onFocus={() => (inputListProError.project = true)}
              type="text"
              maxLength='35'
              name="project"
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
              Project Name
            </label>


            <label for="" class=" text-xs text-red-500">
            {inputListProError.project === true
              ? x.project.length <=2
                ? "enter at least 3 character ❌"
                : null
                ? x.project.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>



          </div>
          {/* <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
            <input
              value={x.descriptionPro}
              onChange={(e) => handleInputChangePro(e, i)}
              type="text"
              name="descriptionPro"
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
              Description
            </label>
          </div> */}

          <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
            <input
              value={x.links}
              onChange={(e) => handleInputChangePro(e, i)}
              onFocus={() => (inputListProError.links = true)}
              type="url"
              name="links"
              maxLength='200'
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
              Github Link/Links
            </label>
            
            <label for="" class=" text-xs text-red-500">
            {inputListProError.links === true
              ? !/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(x.links)
                ? "enter valid url ❌"
                : null
                ? x.links.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>
          </div>




       






          <div className="btn-box flex flex-row gap-3 m-5">
            {inputListPro.length !== 1 && (
              <img
                onClick={() => handleRemoveClickPro(i)}
                className="mr10 w-7 h-7 cursor-pointer"
                src="https://img.icons8.com/material-outlined/24/FA5252/trash--v1.png"
              />
            )}
            {inputListPro.length - 1 === i && (
              // <button onClick={handleAddClickPro}>Add</button>

              <img
                onClick={handleAddClickPro}
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
