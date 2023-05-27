import * as React from 'react'
import {
  Center,
  CloseButton,
  Image,
  Stack,
  Heading,
  Button,
  Flex,
  //   FormControl,
  FormLabel,
  Input,
  Text,
  Switch
} from '@chakra-ui/react'
import logo from '../../assets/images/logo.png'
import upload from '../../assets/images/download.png'

export default function CreateModal () {
  return (
    <Flex>
      <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex align={'center'} justify={'center'}>
          <Stack w={'full'} maxW={'md'}>
            <Center></Center>
            <Heading fontSize={'2xl'} py='10px'>
              Oh no! Post here so anteaters can help you!
            </Heading>
            <Flex justifyContent={'space-between'}>
              <FormLabel htmlFor='lost-item' mb='0'>
                Is your item lost?
              </FormLabel>
              <Switch id='lost-switch' size='lg' colorScheme='red' />
            </Flex>
            <Flex justifyContent={'space-between'}>
              <FormLabel htmlFor='found-item' mb='0'>
                Did you find an item?
              </FormLabel>
              <Switch id='found-switch' size='lg' colorScheme='green' />
            </Flex>
            <Text py='10px'>Enter your information below: </Text>
            <Input variant='outline' placeholder='Item Name' />
            <Input variant='outline' placeholder='Description of Item' />
            <Input variant='outline' placeholder='Email Address' />
            <Input variant='outline' placeholder='Phone Number' />

            <Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}></Flex>
      </Stack>
      <Flex
        size='50%'
        align='center'
        py='50px'
        flexDirection='column'
        justifyContent='center'
      >
        <Image
          borderRadius='full'
          boxSize='300px'
          src={upload}
          alt='uploadimage'
          border='2px'
          borderColor='gray.200'
          mb='20px'
        />
        <Button colorScheme={'blue'} variant={'solid'}>
          Upload
        </Button>
      </Flex>

      <CloseButton size='lg' />
    </Flex>
  )
}
