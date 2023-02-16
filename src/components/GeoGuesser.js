import React from "react";
import ReactStreetview from "react-streetview";

const GeoGuesser = () => {
  // const googleMapsApiKey = "AIzaSyC9TTEQVKFDvpZkwwqqOOWQu7SD1rLbE7Q";

  const googleMapsApiKey = process.env.REACT_APP_MAPS_KEY;

  console.log(googleMapsApiKey);

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 48.86750220793768, lng: 2.78353936022087 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
  return (
    <div
      style={{
        width: "390px",
        height: "840px",
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
