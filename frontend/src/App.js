import './App.css';
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Register from './components/Register/Register'
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("http://127.0.0.1:4005/").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[])
  console.log(data)
        

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App;
