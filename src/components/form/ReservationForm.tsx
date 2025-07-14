import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { User, Phone, MapPin, Flag } from 'lucide-react';

interface Municipality {
  name: string;
  value: string;
}

interface ReservationFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    departure: string;
    destination: string;
  }) => void;
  municipalities: Municipality[];
}

export default function ReservationForm({ onSubmit, municipalities }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    departure: '',
    destination: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 w-full max-w-md mx-auto form-container transition duration-300 hover:translate-y-[-2px] hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Réservation de Trajet</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Nom complet</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              name="name"
              required
              className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 input-field"
              placeholder="Rhenard Munongo"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Téléphone */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="tel"
              name="phone"
              required
              className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 input-field"
              placeholder="+243 000 000 000"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Départ */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Point de départ</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="w-5 h-5 text-gray-400" />
            </span>
            <select
              name="departure"
              required
              className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
              onChange={handleChange}
            >
              <option value="">Sélectionnez un départ</option>
              {municipalities.map((municipality: Municipality) => (
                <option key={municipality.value} value={municipality.value}>
                  {municipality.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Destination */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Flag className="w-5 h-5 text-gray-400" />
            </span>
            <select
              name="destination"
              required
              className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
              onChange={handleChange}
            >
              <option value="">Sélectionnez une destination</option>
              {municipalities.map((municipality: Municipality) => (
                <option key={municipality.value} value={municipality.value}>
                  {municipality.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Bouton */}
        <div className="pt-2">
          <button
            type="submit"
            className="submit-btn w-full py-3 px-4 text-white font-medium rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:to-blue-600 transition duration-300"
          >
            Réserver maintenant
          </button>
        </div>
      </form>
    </div>
  );
}