import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      
     <div className='p-10'>
      <Card  user="Nikkii" age="99" city="kota"/>
     </div>

    </div>
  )
}

export default App

import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-black text-white inline-block p-9 m-11 text-center rounded'>
    <h1>{props.user}</h1>
    <h2 >{props.city}{props.age}</h2>
    <button>add friend</button>
    </div>
  )
}

export default Card

import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-1 bg-white text-black inline-block p-9 m-11 text-center rounded'>
   <img className=' h-33 w-32 rounded-full mb-5' src="https://thumbs.dreamstime.com/z/camel-face-close-up-portrait-270815779.jpg" />
    <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
<h4 className='text-blue-400 '> {props.profession} </h4>
    <h2 >{props.city},{props.age}</h2>
    <button className='bg-emerald-700 text-white mt-6 px-2 py-2 rounded font-medium'>Add friend</button>
    </div>
  )
}

export default Card

import React from 'react'
import Card from './components/Card'

const App = () => {
  

const users=
   [
    {
      "name": "John Doe",
      "city": "New York",
      "age": 28,
      "profession": "Software Engineer"
    },
    {
      "name": "Jane Smith",
      "city": "London",
      "age": 32,
      "profession": "Graphic Designer"
    },
    {
      "name": "Carlos Rodriguez",
      "city": "Madrid",
      "age": 25,
      "profession": "Data Analyst"
    },
    {
      "name": "Aditi Sharma",
      "city": "Mumbai",
      "age": 29,
      "profession": "Product Manager"
    },
    {
      "name": "Liam Chen",
      "city": "Sydney",
      "age": 35,
      "profession": "Teacher"
    }
  ]


  return (
    <div>
      
     <div className='p-10'>
     {users.map(function(elem,idx){
      return <Card key={idx} name={elem.name} profession={elem.profession} age={elem.age} city={elem.city}/>
     })}
     </div>

    </div>
  )
}

export default App
