import * as React from 'react'
import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image
} from '@chakra-ui/react'

const IMAGE = 'https://m.media-amazon.com/images/I/51o+c2cvwrL._AC_UF894,1000_QL80_.jpg'

export default function InfoModal() {
    return (
        <Center py={6}>
            <Box
                role={'group'}
                p={6}
                maxW={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Center>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Center>

                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Big Chonky Chopper
                    </Heading>
                    <Text color={'gray.500'} fontSize={'md'}>
                        This Chopper fought dinosaurs in the late 1980s and gave Luffy a fat cock.
                        Luffy, Nami, ZaddyZoro, BigNose, DeadSkeleton, Puncher, Jinbei
                    </Text>
                    <Button colorScheme='blue' ml='3' py='10px'>
                        Contact Me
                    </Button>
                </Stack>
                <Text color={'gray.500'}>Posted on Feb 08, 2021</Text>
            </Box>
        </Center >
    )
}