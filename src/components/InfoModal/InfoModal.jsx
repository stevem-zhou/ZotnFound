import * as React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex
} from "@chakra-ui/react";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function InfoModal({ onOpen, isOpen, onClose, props, currentEmail}) {

  async function handleDelete(){
    console.log(props.id)
    await deleteDoc(doc(db, "items", props.id));
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton size="lg" />
        <Center py={6}>
          <Box
            role={"group"}
            p={10}
            maxW={"400px"}
            maxH={"800px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            marginTop={"15px"}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              bgPos={"center"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Center>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={props.image}
                />
              </Center>
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={"bold"}>
                {props.name}
              </Heading>
              <Text color={"gray.500"} fontSize={"md"}>
                {props.description}
              </Text>
              <Flex>
                <Button colorScheme="blue" ml="3" py="10px">
                  <a href={props.contact}>Contact Me</a>
                </Button>
                {currentEmail == props.email && <Button colorScheme="red" ml="3" px="36px" onClick={handleDelete}>
                  <a href={props.contact}>Delete</a>
                </Button>}
              </Flex>
              <Text color={"gray.500"}>Posted on {props.date}</Text>
            </Stack>
          </Box>
        </Center>
      </ModalContent>
    </Modal>
  );
}
