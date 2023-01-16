import './App.css';
import Login from './components/Login/Login'
import { useState, useEffect } from "react"

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
    <Login />
  )
}

export default App;
