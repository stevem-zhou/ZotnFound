import React from "react";
import Map from "../Map/Map";
import "./Home.css";
import Filter from "../Filter/Filter";
import ResultsBar from "../ResultsBar/ResultsBar";

export default function Home() {
  return (
    <div className="home">
      <Filter />
      <Map />
      <ResultsBar />
    </div>
  );
}
