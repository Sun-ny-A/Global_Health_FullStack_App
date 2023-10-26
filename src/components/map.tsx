import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { useEffect, useState } from 'react';
// import Map from "../Map/Map";
// import { loadMapApi } from "../utils/GoogleMapsUtils";

// url to a valid topojson file

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export function WorldMap() {

    //const [scriptLoaded, setScriptLoaded] = useState(false);

    // useEffect(() => {
    //     const googleMapScript = loadMapApi();
    //     googleMapScript.addEventListener('load', function() {
    //         setScriptLoaded(true);
    //     })
    // }, []);

    
  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<WorldMap />, document.getElementById("app"));
});