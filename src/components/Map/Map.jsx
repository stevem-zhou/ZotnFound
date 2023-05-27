import React from "react";
import "./Map.css";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Map() {
  function hi() {
    console.log("hi");
  }
  return (
    <div>
      <MapContainer
        style={{ height: "90vh", width: "60vw", zIndex: "0"}}
        center={[33.6461, -117.8427]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[33.6461, -117.8427]} eventHandlers={{ click: hi }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
