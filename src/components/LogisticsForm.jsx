import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const timeOptions = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2).toString().padStart(2, '0');
  const min = i % 2 === 0 ? '00' : '30';
  return `${hour}:${min}`;
});

export default function LogisticsForm() {
  const [form, setForm] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    arrivalDate: '',
    departureTime: '',
    arrivalTime: '',
    clientName: '',
    equipment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quote request submitted for ${form.clientName}!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-xl bg-white shadow-2xl rounded-2xl border border-gray-200 p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">Travel Quote Request</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Departure Location</label>
            <div className="flex items-center border rounded-lg p-2">
              <MapPin className="mr-2 text-gray-500" />
              <input
                name="departure"
                placeholder="Enter departure location..."
                value={form.departure}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Destination</label>
            <div className="flex items-center border rounded-lg p-2">
              <MapPin className="mr-2 text-gray-500" />
              <input
                name="destination"
                placeholder="Enter destination..."
                value={form.destination}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Date of Departure</label>
              <input type="date" name="departureDate" value={form.departureDate} onChange={handleChange} className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium">Date of Arrival</label>
              <input type="date" name="arrivalDate" value={form.arrivalDate} onChange={handleChange} className="w-full border rounded-lg p-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Time of Departure</label>
              <div className="flex items-center border rounded-lg p-2">
                <Clock className="mr-2 text-gray-500" />
                <select name="departureTime" value={form.departureTime} onChange={handleChange} className="w-full bg-transparent outline-none">
                  <option value="">Select time</option>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block font-medium">Time of Arrival</label>
              <div className="flex items-center border rounded-lg p-2">
                <Clock className="mr-2 text-gray-500" />
                <select name="arrivalTime" value={form.arrivalTime} onChange={handleChange} className="w-full bg-transparent outline-none">
                  <option value="">Select time</option>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-medium">Client Name</label>
            <input name="clientName" placeholder="Enter client name" value={form.clientName} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>

          <div>
            <label className="block font-medium">Equipment</label>
            <select name="equipment" value={form.equipment} onChange={handleChange} className="w-full border rounded-lg p-2">
              <option value="">Select equipment</option>
              <option value="Truck">Truck</option>
              <option value="Excavator">Excavator</option>
              <option value="Bulldozer">Bulldozer</option>
              <option value="Crane">Crane</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}

