import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267251 /* data.lat */,
    lng: -99.1718797 /* data.lng */,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBZiQ2FX9McUjmIgY146NaFsBXqr9pArj0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
