export default function GeoData({ data }: { data: any }) {
  return (
    <div>
      <h1>Weather</h1>
      <p>Temperature: {data.main.temp}</p>
      <p>Feels like: {data.main.feels_like}</p>
      <p>Humidity: {data.main.humidity}</p>
      <p>Pressure: {data.main.pressure}</p>
    </div>
  );
}
