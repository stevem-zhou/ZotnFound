import * as React from "react";
import { useState } from "react";
import {
  Center,
  Box,
  CloseButton,
  Image,
  Stack,
  Heading,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Switch,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import logo from "../../assets/images/small_logo.png";
import upload from "../../assets/images/download.png";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CreateModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadImg, setUploadImg] = useState(upload);

  const uploadFile = () => {
    if (!props.image) return;

    const imageRef = ref(storage, `zotnfound/images/${props.image.name}`);

    uploadBytes(imageRef, props.image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUploadImg(url);
        props.setImage(url);
      });
    });
  };
  console.log(props.image);
  return (
    <>
      <Button
        mt="20px"
        h="20%"
        w="100%"
        _hover={{ bg: "#b4dbd9" }}
        backgroundColor="#61b895"
        color="white"
        fontSize="4xl"
        fontWeight="bold"
        borderRadius="20px"
        onClick={() => {
          onOpen();
          props.setIsEdit(!props.isEdit);
        }}
      >
        +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay>
          <ModalContent>
            <Flex width="100%" justifyContent="center">
              <Stack minH={"70vh"} direction={{ base: "column", md: "row" }}>
                <Flex align={"center"} justify={"center"} ml={10}>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    align="center"
                    gap={2}
                  >
                    <Heading fontSize={"2xl"} py="10px">
                      Oh no! Post here so anteaters can help you!
                    </Heading>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                      }}
                    >
                      <Center mb={3}>
                        <FormControl isRequired>
                          <FormLabel>File Upload:</FormLabel>
                          <Input
                            type="file"
                            placeholder="Image URL"
                            onChange={(e) => {
                              props.setImage(e.target.files[0]);
                            }}
                          />
                        </FormControl>
                        <button onClick={uploadFile}>click</button>
                      </Center>
                      <FormControl isRequired mb="3">
                        <FormLabel>Select Item Type:</FormLabel>
                        <Select
                          placeholder="Select option"
                          onChange={(e) => props.setType(e.target.value)}
                        >
                          <option value="headphone">Headphones</option>
                          <option value="wallet">Wallet</option>
                          <option value="key">Keys</option>
                          <option value="phone">Phone</option>
                          <option value="others">Others</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <Flex justifyContent={"space-between"} mb="0">
                          <FormLabel htmlFor="lost-item">
                            Lost or Found Item?
                          </FormLabel>
                          <Switch
                            id="lost-switch"
                            size="lg"
                            colorScheme="red"
                            onChange={() => props.setIsLost(!props.isLost)}
                          />
                        </Flex>
                        <Flex justifyContent="flex-end" mt={0}>
                          <FormHelperText fontSize="20px">
                            {props.isLost ? "Lost" : "Found"}
                          </FormHelperText>
                        </Flex>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel py="10px">
                          Enter your information below:{" "}
                        </FormLabel>

                        <Input
                          variant="outline"
                          placeholder="Item Name"
                          mb="2"
                          onChange={(e) => props.setName(e.target.value)}
                        />
                        <Input
                          variant="outline"
                          placeholder="Description of Item"
                          mb="2"
                          onChange={(e) => props.setDescription(e.target.value)}
                        />
                      </FormControl>

                      <Stack>
                        <Button
                          colorScheme={
                            props.image != "" &&
                            props.type != "" &&
                            props.name != "" &&
                            props.description != ""
                              ? "green"
                              : "gray"
                          }
                          variant={"solid"}
                          type="submit"
                        >
                          Continue
                        </Button>
                      </Stack>
                    </form>
                  </Flex>
                  <Flex width="50%" justifyContent="center">
                    <Image
                      sizeBox="100%"
                      src={props.image == "" ? upload : uploadImg}
                      width="100%"
                      ml="10%"
                    />
                  </Flex>
                </Flex>
                <Flex flex={1}></Flex>
              </Stack>
            </Flex>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}
