import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

function MapPage() {
  const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl'
  const [results, setResults] = useState(undefined as unknown as any[])

  const customIcon = new Icon({
    iconUrl: '/map-marker.png',
    iconSize: [38, 38] 
  });
  
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
    <MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: '100vh', width: '100vw', margin: -8  }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        {results ? results.map((result, index) => (
        <Marker key={index} position={[result.location_y as number, result.location_x as number]} icon={customIcon}><Popup>
        <a href={result.media_website}>{result.media_website}</a>
      </Popup></Marker>
      
      )) : <p>Loading...</p>}
    </MapContainer>
  );
} 

export default MapPage;