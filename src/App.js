import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ResultCard from "./components/ResultCard/ResultCard";
import CreateModal from "./components/CreateModal/CreateModal";
import InfoModal from "./components/InfoModal/InfoModal";

import { ChakraProvider } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<ResultCard />} />
          <Route path="/modals" element={<CreateModal />} />
          <Route path= "/info" element = {<InfoModal/>}/>
        </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
