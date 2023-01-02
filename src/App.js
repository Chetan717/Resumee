import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TemplateA from './Page/TamplateA'

import Home from './Page/Home'
import TemB from './Page/TemB'
import TemC from './Page/TemC'
import TemD from './Page/TemD'


export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path='/Page/TemplateA' element={<TemplateA/>}></Route>
      <Route path='/Page/TemB' element={<TemB/>}></Route>
      <Route path='/Page/TemC' element={<TemC/>}></Route>
      <Route path='/Page/TemD' element={<TemD/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

