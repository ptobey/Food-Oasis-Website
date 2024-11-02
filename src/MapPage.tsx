import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { Icon, map } from "leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./MapPage.css";
import React from "react";

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

const walmart = [
  {
    geocode: [28.4069, -81.4158],
    popUp: "Walmart 1",
  },
  {
    geocode: [28.5037, -81.5029],
    popUp: "Walmart 2",
  },
  {
    geocode: [28.5117, -81.3743],
    popUp: "Walmart 3",
  },
  {
    geocode: [28.5412, -81.2065],
    popUp: "Walmart 4",
  },
  {
    geocode: [28.5118, -81.1578],
    popUp: "Walmart 5",
  },
];

const publix = [
  {
    geocode: [28.2851, -81.4229],
    popUp: "Publix 1",
  },
  {
    geocode: [28.3083, -81.4216],
    popUp: "Publix  2",
  },
  {
    geocode: [28.3237, -81.4339],
    popUp: "Publix  3",
  },
  {
    geocode: [28.1668, -81.4397],
    popUp: "Publix  4",
  },
  {
    geocode: [28.294, -81.3433],
    popUp: "Publix  5",
  },
];

function MapPage() {
  const url =
    "https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl";
  const [resultsFarmersMarket, setResults] = useState<any[]>([]);

  const customIconFarmersMarket = new Icon({
    iconUrl: "/map-marker.png",
    iconSize: [38, 38],
  });

  const customIconWalmart = new Icon({
    iconUrl: "/walmart.png",
    iconSize: [38, 38],
  });

  const customIconPublix = new Icon({
    iconUrl: "/publix.png",
    iconSize: [38, 38],
  });

  useEffect(() => {
    axios.get(url).then((response: any) => {
      setResults(response.data.data);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/").then((response: any) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2 className="heading">Farmers Markets in Florida</h2>
        <p className="text-muted">
          Blue circle is your approximate location. Zoom out to see more
          locations. Click marker for additional information.
        </p>
      </div>
      <div className="">
        <div className="">
          <MapContainer
            center={[28.5384, -81.3789]}
            zoom={13}
            style={{ height: "89vh", width: "100vw", margin: -8 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <LocationMarker />
            <div className="layers-control-container">
              <h3>Map Legend</h3>
              <LayersControl position="bottomright" collapsed={false}>
                <LayersControl.Overlay checked name="Farmers Market">
                  <LayerGroup>
                    <MarkerClusterGroup chunkedLoading>
                      {resultsFarmersMarket.map((result, index) => (
                        <Marker
                          key={index}
                          position={[
                            result.location_y as number,
                            result.location_x as number,
                          ]}
                          icon={customIconFarmersMarket}
                        >
                          <Popup>
                            <a href={result.media_website}>
                              {result.media_website}
                            </a>
                          </Popup>
                        </Marker>
                      ))}
                    </MarkerClusterGroup>
                  </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Walmart">
                  <LayerGroup>
                    <MarkerClusterGroup chunkedLoading>
                      {walmart.map((walmart) => (
                        <Marker
                          position={walmart.geocode as [number, number]}
                          icon={customIconWalmart}
                        >
                          <Popup>{walmart.popUp}</Popup>
                        </Marker>
                      ))}
                    </MarkerClusterGroup>
                  </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Publix">
                  <LayerGroup>
                    <MarkerClusterGroup chunkedLoading>
                      {publix.map((publix) => (
                        <Marker
                          position={publix.geocode as [number, number]}
                          icon={customIconPublix}
                        >
                          <Popup>{publix.popUp}</Popup>
                        </Marker>
                      ))}
                    </MarkerClusterGroup>
                  </LayerGroup>
                </LayersControl.Overlay>
              </LayersControl>
            </div>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
