import { useState } from "react"
const App = () => {
  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>Number Game</h1>
      <h2>le dekh {num}</h2>
      <button id="fn" onClick={()=> setnum(num+10)}> bdha do bhai</button>
      <button id="fm" onClick={()=>setnum(num-10)}>kum karo yarrr</button>
    </div>
  )
}

export default App

style.css
#fn{
  background-color: green;
}
#fm{
  background-color: #ba2121;
}
