import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";
import classes from "./Map.module.css";

type Props = {
  office: LatLngExpression | undefined;
};

const Map: React.FC<Props> = ({ office }) => {
  const [center, setCenter] = useState<LatLngExpression>([
    42.53199034588999, -77.01132639826639,
  ]);

  //   const center: LatLngExpression = [42.53199034588999, -77.01132639826639];
  const zoom = 6;

  useEffect(() => {
    if (office) {
      setCenter(office);
    }
  }, [office]);

  console.log(center);

  // for mainOffice and officeTwo I used the
  // Eaton Center and the Empire State Building

  const mainOffice: LatLngExpression = [43.654815633117366, -79.38077998638532];

  const officeTwo: LatLngExpression = [40.74998788020167, -73.98510820790769];

  const customIcon = new Icon({
    iconUrl: "/assets/icons/icon-location.svg",
    iconSize: [30, 40],
  });

  return (
    <section className={classes.mapComponent} id="map">
      <div className={classes.map}>
        <MapContainer
          center={center}
          zoom={office ? 16 : zoom}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mainOffice} icon={customIcon}>
            <Popup>Main Office</Popup>
          </Marker>
          <Marker position={officeTwo} icon={customIcon}>
            <Popup>Office II</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
