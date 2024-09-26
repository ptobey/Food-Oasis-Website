import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl } from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function LocationMarker() {
  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
      maxZoom: 16,
    });

    const handleOnLocationFound = (event: L.LocationEvent) => {
      const radius = event.accuracy;
      const circle = L.circle(event.latlng, { radius });
      circle.addTo(map);
    };

    const handleOnLocationError = (error: L.ErrorEvent) => {
      alert(`Unable to determine location: ${error.message}`);
    };

    map.on("locationfound", handleOnLocationFound);
    map.on("locationerror", handleOnLocationError);

    return () => {
      map.off("locationfound", handleOnLocationFound);
      map.off("locationerror", handleOnLocationError);
    };
  }, [map]);

  return null;
}

function Legend() {
  const map = useMap();
  useEffect(() => {
    if (map) {
      const legend = L.control.attribution({ position: "bottomright"});

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML =
          "<h4>This is the legend</h4>" +
          "<b>two on add effects = two legends?</b>";
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

function MapPage() {
  const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl';
  const [resultsFarmersMarket, setResults] = useState<any[]>([]);

  const customIconFarmersMarket = new Icon({
    iconUrl: '/map-marker.png',
    iconSize: [38, 38],
  });

  useEffect(() => {
    axios.get(url).then((response: any) => {
      setResults(response.data.data);
      console.log(response);
    });
  }, []);

  return (
    <div className='container'>
      <div className="header">
      <h2 className='heading'>Farmers Markets in Florida</h2>
      <p className="text-muted">Blue circle is your approximate location.  Zoom out to see more locations.  Click marker for
        additional information.</p></div>
      <div className="">
        <div className="">
    <MapContainer
      center={[28.5384, -81.3789]}
      zoom={13}
      style={{ height: '89vh', width: '100vw', margin: -8 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Legend />

      <LocationMarker />

      
      <LayersControl position="topright">
        <LayersControl.Overlay name="Farmers Market">
      <MarkerClusterGroup chunkedLoading>
        {resultsFarmersMarket.map((result, index) => (
          <Marker
            key={index}
            position={[result.location_y as number, result.location_x as number]}
            icon={customIconFarmersMarket}
          >
            <Popup>
              <a href={result.media_website}>{result.media_website}</a>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
              </div>
          </div>
      </div>
  );
}

export default MapPage;
