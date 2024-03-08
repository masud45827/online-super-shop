import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Auth/Register'
import Product from './pages/Product';
import Homepage from './pages/Homepage';

function App() {

  return (
     <div>
       <BrowserRouter>
               <Routes>
                 <Route path="/" element ={<Homepage/>} />
                  <Route path="/api/register" element ={<Register/>} />
                  <Route path="/api/product" element ={<Product/>} />
               </Routes>
       </BrowserRouter>
     </div>
  )
}

export default App
