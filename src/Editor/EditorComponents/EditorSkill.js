import React from 'react'
import { MultiSelect } from "react-multi-select-component";




const options = [
    { label: "React.js", value: "React.js" },
    { label: "Javascript", value: "javacript" },
    { label: "Express.js", value: "Express.js" },
    { label: "Python", value: "Python" },
    { label: "Java", value: "Java" },
    { label: "MongoDB", value: "mongoDB" },
    { label: "Full Stack Devlopment", value: "FullStack-Devlopment" },
    { label: "Frontend Devloper", value: "Frontend Devloper" },
    { label: "Backend Devloper", value: "Backend Devloper" },
  ];
  




export default function EditorSkill({selected,setSelected}) {
  return (
<>

<h1 className="text-yellow-500 font-bold ">Add Skills !</h1>

<div class=" w-[300px]  mb-2 sm:w-1/2 ">
  <label className="label">
    <span className=" font-sans text-green-500">
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


</>  
  )
}
