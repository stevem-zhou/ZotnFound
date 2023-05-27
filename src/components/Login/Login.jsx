import React from 'react'

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react'
import logo from '../../assets/images/logo.png'


export default function Login() {
  
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={3} w={'full'} maxW={'md'}>
          <Center>
            <Image
              borderRadius='full'
              boxSize='300px'
              src={logo}
              alt='zotnfoundLogo'
            />
          </Center>
          <Heading fontSize={'2xl'} py='50px'>
            Sign in to your account..
          </Heading>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>

            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
        </Stack>
    </Stack>
      </Flex >
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={'https://www.pinmaps.net/Images/homecr/home-page-image.png'}
      />
    </Flex>
    </Stack >
  )
}
