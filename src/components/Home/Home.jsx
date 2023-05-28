import React, { useState } from 'react'
import Map from '../Map/Map'
import './Home.css'
import Filter from '../Filter/Filter'
import ResultsBar from '../ResultsBar/ResultsBar'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
// import { Search2Icon } from "@chakra-ui/icons";
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import fakeData from '../../fakeData'
import CreateModal from '../CreateModal/CreateModal'

import instagram from '../../assets/logos/instagram.svg'

import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  Image
} from '@chakra-ui/react'
import logo from '../../assets/images/small_logo.png'
export default function Home () {
  const [search, setSearch] = useState('')
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const currentUser = JSON.parse(localStorage.getItem('user'))

  const handleLogout = e => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        // // Sign-out successful.
        dispatch({ type: 'LOGOUT' })
        navigate('/')
      })
      .catch(error => {
        // An error happened.
      })
  }
  console.log(search)
  return (
    <div>
      <Flex justifyContent='space-between' shadow='md' alignItems='center'>
        <Flex alignItems='center' w='10%'>
          <Image boxSize='100' src={logo} mb='3%' mt='3%' ml='10%' />
          <Text fontSize='xl' fontWeight='500'>
            @zotnfound&nbsp;
          </Text>
          <Image boxSize='30px' src={instagram} />
          {/* <Image boxSize='50' src={instagram} /> */}
        </Flex>
        <HStack w='60%'>
          <InputGroup ml='12%' mt='1%' size='lg' mb='1%'>
            <InputLeftAddon children='🔎' />
            <Input
              type='teal'
              placeholder='Search Items ...'
              onChange={e => setSearch(e.target.value)}
            />
          </InputGroup>
        </HStack>

        <HStack mr='1%'>
          <Text fontSize='xl' fontWeight='500' mr='4%'>
            {currentUser?.email}
          </Text>
          <Button
            colorScheme='blue'
            size='lg'
            mt='2%'
            mr='5%'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
      <div className='home'>
        <Flex alignItems='center' display='block'>
          <Filter />
          <CreateModal />
        </Flex>

        <Map data={fakeData} search={search} />

        <ResultsBar data={fakeData} search={search} />
      </div>
    </div>
  )
}
