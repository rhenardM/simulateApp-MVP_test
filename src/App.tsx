import ReservationForm from './components/form/ReservationForm';
import Map from './components/Map';
import { useState } from 'react';

interface DonneesReservation {
  name: string;
  phone?: string; 
  departure: string;
  destination: string;
}

interface Municipality {
  name: string;
  value: string;
}

const validMunicipalities: Municipality[] = [
  { name: 'Gombe', value: 'Gombe' },
  { name: 'Barumbu', value: 'Barumbu' },
  { name: 'Kasa-Vubu', value: 'Kasa-Vubu' },
  { name: 'Lingwala', value: 'Lingwala' },
  { name: 'Kinshasa', value: 'Kinshasa' },
  { name: 'Kintambo', value: 'Kintambo' },
  { name: 'Ngaliema', value: 'Ngaliema' },
  { name: 'Mont-Ngafula', value: 'Mont-Ngafula' },
  { name: 'Selembao', value: 'Selembao' },
  { name: 'Bumbu', value: 'Bumbu' },
  { name: 'Makala', value: 'Makala' },
  { name: 'Kalamu', value: 'Kalamu' },
  { name: 'Lemba', value: 'Lemba' },
  { name: 'Ngaba', value: 'Ngaba' },
  { name: 'Matete', value: 'Matete' },
  { name: 'Kisenso', value: 'Kisenso' },
  { name: 'Masina', value: 'Masina' },
  { name: 'Kimbanseke', value: 'Kimbanseke' },
  { name: 'Ndjili', value: 'Ndjili' },
  { name: 'Nsele', value: 'Nsele' },
];

type MunicipalityValue = Municipality['value'];

const MunicipalityCoords: Record<MunicipalityValue, [number, number]> = {
  Gombe: [-4.325, 15.313],
  Barumbu: [-4.320, 15.310],
  'Kasa-Vubu': [-4.350, 15.300],
  Lingwala: [-4.340, 15.320],
  Kinshasa: [-4.340, 15.290],
  Kintambo: [-4.350, 15.280],
  Ngaliema: [-4.390, 15.250],
  'Mont-Ngafula': [-4.480, 15.230],
  Selembao: [-4.390, 15.290],
  Bumbu: [-4.380, 15.310],
  Makala: [-4.410, 15.320],
  Kalamu: [-4.370, 15.330],
  Lemba: [-4.390, 15.350],
  Ngaba: [-4.410, 15.340],
  Matete: [-4.380, 15.370],
  Kisenso: [-4.410, 15.370],
  Masina: [-4.370, 15.410],
  Kimbanseke: [-4.420, 15.420],
  Ndjili: [-4.390, 15.430],
  Nsele: [-4.430, 15.570],
};

function App() {
  const [coords, setCoords] = useState<{ start: [number, number] | null; end: [number, number] | null }>({
    start: null,
    end: null,
  });

  const handleReservation = (data: DonneesReservation) => {
    const start = MunicipalityCoords[data.departure as MunicipalityValue] || MunicipalityCoords.Gombe;
    const end = MunicipalityCoords[data.destination as MunicipalityValue] || MunicipalityCoords['Kasa-Vubu'];

    setCoords({ start, end });

    console.log('Réservation soumise :', data);
    alert(`Réservation pour ${data.name} de ${data.departure} à ${data.destination}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center mb-16">Réservation de voiture</h1>
      <ReservationForm onSubmit={handleReservation} municipalities={validMunicipalities} />
      <div className="mt-8 w-full max-w-3xl">
        <Map start={coords.start} end={coords.end} />
        {coords.start && coords.end && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => {
                setTimeout(() => {
                  alert('Un conducteur a été trouvé ! Il arrive dans 5 minutes.');
                }, 1000);
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow transition"
            >
              Chercher un conducteur
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;