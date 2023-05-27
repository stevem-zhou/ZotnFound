import * as React from "react";
import {
  Center,
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
} from "@chakra-ui/react";
import logo from "../../assets/images/small_logo.png";
import upload from "../../assets/images/download.png";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = React.useState("");
  const [isLost, setIsLost] = React.useState(true);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [email, setEmail] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "items"), {
      image: image,
      isLost: isLost,
      name: name,
      description: description,
      email: email,
    });
  }

  console.log(image, isLost, name, description, email);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay>
          <ModalContent>
            <Flex>
              <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
                <Flex align={"center"} justify={"center"} ml={5}>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    align="center"
                    gap={2}
                  >
                    <Heading fontSize={"2xl"} py="10px">
                      Oh no! Post here so anteaters can help you!
                    </Heading>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <Center>
                        <Image
                          borderRadius="full"
                          boxSize="150px"
                          src={upload}
                          alt="uploadimage"
                          border="2px"
                          borderColor="gray.200"
                          mb="20px"
                        />

                        <Input
                          type="text"
                          placeholder="Image URL"
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </Center>

                      <FormControl>
                        <Flex justifyContent={"space-between"} mb="0">
                          <FormLabel htmlFor="lost-item">
                            Lost or Found Item?
                          </FormLabel>
                          <Switch
                            id="lost-switch"
                            size="lg"
                            colorScheme="red"
                            onChange={() => setIsLost(!isLost)}
                          />
                        </Flex>
                        <Flex justifyContent="flex-end" mt={0}>
                          <FormHelperText fontSize="20px">
                            {isLost ? "Lost" : "Found"}
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
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                          variant="outline"
                          placeholder="Description of Item"
                          mb="2"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <Input
                          variant="outline"
                          placeholder="Email Address"
                          mb="2"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>

                      <Stack>
                        <Button
                          colorScheme={"blue"}
                          variant={"solid"}
                          onClick={onOpen}
                          type="submit"
                        >
                          Submit
                        </Button>
                        {/* <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Submit Form
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Are you sure? You can't undo this action
                              afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={onClose}
                                ml={3}
                              >
                                Submit
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog> */}
                      </Stack>
                    </form>
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
