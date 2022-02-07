import React, { useState, useEffect, useRef } from "react";
import './Map.css';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import * as L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export function Map({location}){

function LocationMarker() {
    const map = useMapEvents({
    })

  useEffect(() => {
    map.flyTo(location, map.getZoom());
  }, [map] )

    return  (
      <Marker position={location}>
        <Popup>IP Address is here</Popup>
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