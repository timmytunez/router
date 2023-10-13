import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/services/Service'
import Contact from './pages/contact/Contact'
import Test from './pages/testimonials/Test'


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path= '/' element={<Home/>} />
       <Route path= '/about' element={<About/>} />
       <Route path= '/services' element={<Service/>} />
       <Route path= '/contact' element={<Contact/>} />
       <Route path= '/test' element={<Test/>} />


     </Routes>
    </BrowserRouter>
  )
}

export default App