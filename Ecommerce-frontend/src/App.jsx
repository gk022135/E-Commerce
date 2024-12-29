import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../components/pages/Home'
import Navbar from '../components/pages/Navbar';
import Productmain from '../components/products/Productmain';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/'></Route>
          <Route path='/home' element = {<Home />} />
          <Route path='/products' element = {<Productmain />}></Route>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
