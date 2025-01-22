import React,{useState} from 'react'
import axios from 'axios'
const App = () => {

    const [data, setData] = useState([])
const getData = async()=>{
 
    const response = await axios.get('https://picsum.photos/v2/list')
setData(response.data)
}


  return (
    <div className='p-6'>
<button onClick={getData} className='bg-teal-700 text-white p-4 m-5 active:scale-90 rounded text-2xl '> Click to get 30 free images of macbook with author name</button>
   <div className='bg-gray-950'>
  {data.map(function(elem,idx){
    return <h1>
        <div key={idx} className='bg-gray-50 text-black items-center justify-between w-80 mb-2 px-9 py-2 '></div>
   <img className='h-40 'src={elem.download_url}/>
   <h1> Image author name : {elem.author}</h1>
   
    </h1>
  })}
   </div>
    </div>
  )
}

export default App
