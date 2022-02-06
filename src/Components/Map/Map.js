import React, { useState, useEffect, useRef } from "react";
import './Map.css';
import 'leaflet/dist/leaflet.css'
import L, { point } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
// import { Icon } from "leaflet";
import points from './images/marker-icon.png'


export function Map({location}){

function LocationMarker() {
    const map = useMapEvents({
    })

  useEffect(() => {
    map.flyTo(location, map.getZoom());
  }, [map] )

    return  (
      <Marker position={location}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  return (
    <MapContainer center={[location.lat, location.lng]}   zoom={10}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker></LocationMarker>
</MapContainer>
  );
}