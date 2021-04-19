import React,{useState} from 'react'
import './App.css';
import Select from './select'


function App() {
    const [name,setName]=useState("pradeep")
  return (
    <div className="App">
        <h1>Hii {name}</h1>
        <Select name={name}/>
    </div>
  );

}

export default App;
