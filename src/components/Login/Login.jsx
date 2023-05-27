import React from "react";
import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    isSignUp ? createUsers() : signIn();
  }
  console.log(email, password);

  function createUsers() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
        alert('EMAIL ALREADY IN USE')
      });
  }

  function signIn() {
    const user = signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
        alert("INVALID EMAIL OR PASSWORD")
      });
    console.log(user);
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={3} w={"full"} maxW={"md"}>
          <Center>
            <Image
              borderRadius="full"
              boxSize="300px"
              src={logo}
              alt="zotnfoundLogo"
            />
          </Center>
          <Heading fontSize={"2xl"} py="50px">
            {isSignUp ? "Create your account.." : "Sign in to your account.."}
          </Heading>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => handleEmail(e)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => handlePassword(e)} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              {isSignUp ? (
                <Button colorScheme={"green"} variant={"solid"} type="submit">
                  Create Account
                </Button>
              ) : (
                <Button colorScheme={"blue"} variant={"solid"} type="submit">
                  Sign In
                </Button>
              )}
            </Stack>
<<<<<<< HEAD
          </form>
          <Link color={"blue.500"} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Have Account? Sign In" : "No Account? Create One"}
          </Link>
          <Text>{error}</Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://www.pinmaps.net/Images/homecr/home-page-image.png"}
        />
      </Flex>
    </Stack>
  );
=======

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
>>>>>>> master
}
