import React from "react";
import Map from "../Map/Map";
import "./Home.css";
import Filter from "../Filter/Filter";
import ResultsBar from "../ResultsBar/ResultsBar";
import { Search2Icon } from "@chakra-ui/icons";

import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <InputGroup width="40%" ml="2%" mt="2%" size="lg">
        <InputLeftAddon children="🔎" />
        <Input type="tel" placeholder="Search Items ..." />
      </InputGroup>
      <div className="home">
        <Filter />
        <Map />
        <ResultsBar />
      </div>
    </div>
  );
}
