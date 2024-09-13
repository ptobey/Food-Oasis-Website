import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapPage() {
  const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl'
  const [results, setResults] = useState(undefined as unknown as any[])
  
   const fetchInfo = () => {
     return axios.get(url).then((response: any) => {
       setResults(response.data.data)
       console.log(response)
     });
   };
 
   useEffect(() => {
     fetchInfo();
   }, []);

  return (
    <MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        {results ? results.map((result, index) => (
        <Marker key={index} position={[result.location_y as number, result.location_x as number]}><Popup>
        <a href={result.media_website}>{result.media_website}</a>
      </Popup></Marker>
      
      )) : <p>Loading...</p>}
    </MapContainer>
  );

} 

export default MapPage;