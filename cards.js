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
