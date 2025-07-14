import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix icônes Leaflet manquantes
delete (L.Icon.Default.prototype as { _getIconUrl?: () => void })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapProps {
  start: [number, number] | null;
  end: [number, number] | null;
}

export default function Map({ start, end }: MapProps) {
  if (!start || !end) return null;

  return (
    <MapContainer center={start} zoom={13} style={{ height: '400px', width: '100%', marginTop: 20 }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={start} />
      <Marker position={end} />
      <Polyline positions={[start, end]} pathOptions={{ color: "blue" }} />
    </MapContainer>
  );
}