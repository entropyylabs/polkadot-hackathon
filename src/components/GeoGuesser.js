import React from "react";
import ReactStreetview from "react-streetview";

const GeoGuesser = () => {
  const googleMapsApiKey = process.env.REACT_APP_MAPS_KEY;

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 46.9171876, lng: 17.8951832 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
  return (
    <div
      style={{
        width: "800px",
        height: "450px",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
};

export default GeoGuesser;
