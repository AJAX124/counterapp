import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const addValue = ()=>{
    console.log("clicked:",counter)
     setCounter(counter +1)
  }
  const removeValue =()=>{
      if(counter>0){
        console.log("clicked:",counter)
        setCounter(counter -1)
      }
  }
  return (
    <>
    <h1>ARUN COUNTER APP</h1>
    <h2>COUNTER VALUE :{counter}</h2>
    <button onClick={addValue}>add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
    </>

  )
}

export default App
