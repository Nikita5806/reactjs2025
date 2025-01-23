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
