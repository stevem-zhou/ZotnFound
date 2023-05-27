import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./components/Login/Login";

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cards" element={}/>
      </Routes>
    </div>
  )
}

export default App
