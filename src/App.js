import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import ResultCard from './components/ResultCard/ResultCard'
import CreateModal from './components/CreateModal/CreateModal'

import { ChakraProvider } from '@chakra-ui/react'

function App () {
  return (
    <ChakraProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cards' element={<ResultCard />} />
          ;<Route path='/modals' element={<CreateModal />} />
        </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
