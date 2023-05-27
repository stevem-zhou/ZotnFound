import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ResultCard from "./components/ResultCard/ResultCard";

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cards" element={<ResultCard/>}/>
      </Routes>
    </div>
  )
}

export default App
