import React, { useState, useEffect } from "react";
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
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

import instagram from "../../assets/logos/instagram.svg";

import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/images/small_logo.png";
export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const [findFilter, setFindFilter] = useState({
    type: "everything",
    isFound: true,
    isLost: true,
    uploadDate: "",
  });

  console.log(fakeData);

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

  useEffect(() => {
    const collectionRef = collection(db, "items");
    const q = query(collectionRef, orderBy("date"));
    const unsub = onSnapshot(q, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log(data);

  return (
    <div>
      <Flex justifyContent="space-between" shadow="md" alignItems="center">
        <Flex alignItems="center" w="10%">
          <Image boxSize="100" src={logo} mb="3%" mt="3%" ml="10%" />
          <Text fontSize="xl" fontWeight="500">
            @zotnfound&nbsp;
          </Text>
          <Image boxSize="30px" src={instagram} />
          {/* <Image boxSize='50' src={instagram} /> */}
        </Flex>
        <HStack w="60%">
          <InputGroup ml="12%" mt="1%" size="lg" mb="1%">
            <InputLeftAddon children="🔎" />
            <Input
              type="teal"
              placeholder="Search Items ..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </HStack>

        <HStack mr="1%">
          <Text fontSize="xl" fontWeight="500" mr="4%">
            {currentUser?.email}
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            mt="2%"
            mr="5%"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
      <div className="home">
        {/* <CreateModal /> */}
        <Flex alignItems="center" display="block">
          <Filter setFindFilter={setFindFilter} />
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
        </Flex>
        <Map
          data={data}
          isEdit={isEdit}
          isLost={isLost}
          type={type}
          image={image}
          description={description}
          name={name}
          email={currentUser.email}
          setIsEdit={setIsEdit}
          search={search}
          findFilter={findFilter}
        />
        <ResultsBar data={data} search={search} findFilter={findFilter} currentEmail={currentUser.email}/>
      </div>
    </div>
  );
}
