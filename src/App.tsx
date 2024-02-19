import { useState, useEffect } from "react";

import "./App.css";
import Geo from "./component/geo";

function App() {
  const [geo, setGeo] = useState<{ lat: number; lon: number }>();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeo({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
    }
  }, []);
  return <>{geo ? <Geo lon={geo.lon} lat={geo.lat} /> : <div>No Geo</div>}</>;
}

export default App;
