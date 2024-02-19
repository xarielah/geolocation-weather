export default function GeoData({ data }: { data: any }) {
  return (
    <div>
      <h1>Weather</h1>
      <h3>
        You're in <u>{data.name}</u>, weather is {data.weather[0].description}.
      </h3>
      <p>Temperature: {data.main.temp}c</p>
      <p>Feels like: {data.main.feels_like}c</p>
      <p>Humidity: {data.main.humidity}</p>
      <p>Pressure: {data.main.pressure}</p>
    </div>
  );
}
