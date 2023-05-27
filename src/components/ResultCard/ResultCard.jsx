import * as React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Flex
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

export default function ResultCard () {
  return (
    <Card maxW='sm' align={'center'}>
      <CardBody>
        <Image
          src='https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/p8kfSWINHpFDEJCA5Bd9fC6yG8cHmYwHnz9qIkXq.jpg'
          alt='Car key'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Car key</Heading>
          <Flex justifyContent={'space-between'}>
            <Text color='blue.600' fontSize='1xl'>
              Katy Huang
            </Text>
            <Text color='blue.600' fontSize='1xl'>
              May 26, 2023
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex justifyContent={'space-between'}>
          <Button
            variant='ghost'
            colorScheme='blue'
            leftIcon={<PhoneIcon />}
            mr='20%'
            size='lg'
            w='40'
          >
            View
          </Button>
          <Button colorScheme='red' ml='20%' size='lg' w='40'>
            Lost
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}
