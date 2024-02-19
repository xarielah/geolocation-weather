import { useEffect, useState } from "react";
import GeoData from "./geo-data";

export default function Geo({ lat, lon }: { lat: number; lon: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    setLoading(true);
    fetch(
      `${
        import.meta.env.DEV
          ? "http://localhost:3000"
          : "https://nestjs-weather-app.onrender.com"
      }/weather?lon=${lon}&lat=${lat}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <>Loading your location</>;
  if (!data) return <>Allow location to see weather</>;
  return <GeoData data={data} />;
}
