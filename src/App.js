import React, { useState } from 'react';
import './App.css'
import data from './data/data'

function App() {
  
  const [index, setIndex] = useState(0)
  const changeView = () => {
    if (index >= data.length -1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }    
  }

  return (
   <div
    className="App"
    onClick={changeView}
    style={{
      color: data[index].color,
      backgroundColor: data[index].bgColor,
      textShadow: data[index].textShadow
    }}
   >
     {data[index].text}
   </div>
  )
}

export default App;
