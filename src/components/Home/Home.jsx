import React from "react";
import Map from "../Map/Map";
import "./Home.css";
import Filter from "../Filter/Filter";
import ResultsBar from "../ResultsBar/ResultsBar";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
// import { Search2Icon } from "@chakra-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import fakeData from "../../fakeData";
import CreateModal from "../CreateModal/CreateModal";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { isDeclareOpaqueType } from "@babel/types";
export default function Home() {
  const { dispatch } = useContext(AuthContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [type, setType] = React.useState("");
  const [isLost, setIsLost] = React.useState(true);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // // Sign-out successful.
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <Flex justifyContent="space-between" shadow="md">
        <InputGroup width="40%" ml="2%" mt="1%" size="lg" mb="1%">
          <InputLeftAddon children="🔎" />
          <Input type="teal" placeholder="Search Items ..." />
        </InputGroup>
        <HStack>
          <Text fontSize="xl" fontWeight="500" mr="4%">
            {currentUser?.email}
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            mt="2%"
            mr="2%"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
      <div className="home">
        <Filter />
        <Map
          data={fakeData}
          isEdit={isEdit}
          isLost={isLost}
          type={type}
          image={image}
          description={description}
          name={name}
          email={currentUser.email}
          setIsEdit={setIsEdit}
        />
        <ResultsBar data={fakeData} />
        <CreateModal
          setImage={setImage}
          setDescription={setDescription}
          setIsLost={setIsLost}
          setName={setName}
          setType={setType}
          image={image}
          description={description}
          isLost={isLost}
          name={name}
          type={type}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
    </div>
  );
}
