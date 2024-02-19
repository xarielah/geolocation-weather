import { useState, useEffect, useCallback } from "react";

import "./App.css";
import Geo from "./component/geo";

function App() {
  const [geo, setGeo] = useState<{ lat: number; lon: number }>();

  // We use useCallback to avoid creating a new function every time the component renders
  const askGeo = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeo({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation must be enabled to use this app");
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      askGeo();
    }
  }, []);
  if (!geo) return <>Allow your location on settings</>;
  return <Geo lon={geo.lon} lat={geo.lat} />;
}

export default App;
