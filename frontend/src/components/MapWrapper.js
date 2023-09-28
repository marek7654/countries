import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const MapWrapper = (props) => {
  const [latitude, longitude] = props.coordinates;
  const { zoom } = props;

  const [position, setPosition] = useState(props.coordinates);

  const Recenter = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  useEffect(() => {
    console.log('change position 2', latitude, longitude);
    if (latitude && longitude) {
      setPosition([latitude, longitude]);
    }
  }, [latitude, longitude]);

  return (
    <div className='border rounded-3'>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '400px', width: '100%' }}
      >
        <Recenter center={position} zoom={zoom} />
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
