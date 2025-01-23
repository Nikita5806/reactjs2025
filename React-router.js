import React from 'react'
import {Routes, Route } from 'react-router-dom'
import About from './pages/About'; 

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/about' element= {<About/>}/>
       </Routes>
    </div>
  )
}

export default App

import React from 'react'

const About = () => {
  return (
    <div>
        <h1> Hey , This is About page. </h1>
    </div>
  )
}

export default About




h1{
  position: absolute;
  text-decoration: dotted;
  font-size: 70px;
  font-weight: 600px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50% ,-50%);
  color:#fff ;

}


import React from 'react'
import {Routes, Route } from 'react-router-dom'
import About from './pages/About'; 
import Home from './pages/Home'; 
import Product from './pages/Product'; 
import Header from './components/header';

const App = () => {
  return (
    
    <div>

<Header />
       <Routes>
        <Route path='/about' element= {<About/>}/>
        <Route path ='/home' element={<Home/>}/>
        <Route path ='/product' element={<Product/>}/>
        
       </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <div className='py-7 px-10 bg-emerald-700 text-white flex items-center justify-between'>


    <h2 className='text-2xl'>DeveloperME</h2>

<div className='flex gap-10'>
    
<Link to='./about'>About</Link>
<Link to='./home'>Home</Link>
<Link to='./product'>Product</Link>
</div>
</div>


    
  )
}

export default Header



