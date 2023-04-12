import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './Page/Home'

import Editor2 from './Page/Editor2'



export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
     <Route path="/" element={<Home/>}></Route>
      <Route path='/Editor/:id' element={<Editor2/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

