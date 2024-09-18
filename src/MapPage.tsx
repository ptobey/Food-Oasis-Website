import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents } from "react-leaflet";
import { Icon, LatLng} from "leaflet";
import Map from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";

function MapPage() {
  const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl'
  const [results, setResults] = useState(undefined as unknown as any[])

  const customIcon = new Icon({
    iconUrl: '/map-marker.png',
    iconSize: [38, 38] // size of icon
  });
  
  const fetchInfo = () => {
     return axios.get(url).then((response: any) => {
       setResults(response.data.data)
       console.log(response)
     });
   };

   
  const mapRef = useRef<L.Map | null>(null);
   
 
   useEffect(() => {
     fetchInfo();  // grabbing market data
     if (mapRef.current) {  //geo location attempt starts here - maybe need a separate useEffect? maybe something added in the return?
      const map = mapRef.current;

      map.locate({
        setView: true,
      })

      map.on('locationfound', handleOnLocationFound);
      map.on('locationerror', handleOnLocationError);

      return () => {
        map.off('locationfound', handleOnLocationFound);
        map.off('locationerror', handleOnLocationError);

      };

     }


   }, []);
  
   function handleOnLocationFound(event: L.LocationEvent) { // functions for useEffect
    if (mapRef.current) {
      const map = mapRef.current;
      const latlng = event.latlng;
      const radius = event.accuracy;

      // Create a circle for the located area
      const circle = L.circle(latlng, { radius });
      circle.addTo(map);
      }
    }
        
    function handleOnLocationError(error: L.ErrorEvent) {
      alert(`Unable to determine location: ${error.message}`);
    }

  return (
    <MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: '100vh', width: '100vw', margin: -8  }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    <MarkerClusterGroup
        chunkedLoading  //supposed to speed up loading
      >
        {results ? results.map((result, index) => (
        <Marker key={index} position={[result.location_y as number, result.location_x as number]} icon={customIcon}>
          <Popup><a href={result.media_website}>{result.media_website}</a></Popup>
        </Marker>
      
      )) : <p>Loading...</p>}
    </MarkerClusterGroup>
    </MapContainer>
  );
} 

export default MapPage;