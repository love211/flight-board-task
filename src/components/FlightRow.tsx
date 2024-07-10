import React from 'react';
import { Flight } from '../types/Flight';
import { useNavigate } from 'react-router-dom';

interface FlightRowProps {
  flight: Flight;
}
const FlightRow: React.FC<FlightRowProps> = ({ flight }) => {
  const navigate = useNavigate();

  return (
    <tr className='hover:bg-blue-700 rounded-xl transition-all ease-linear duration-200 hover:scale-105 hover:font-[500] overflow-hidden border-b-2 border-gray-400 font-Montserrat text-white' onClick={() => navigate(`flight/${flight.id}`)} style={{ cursor: "pointer" }}>
      <td className=''> {flight.flightNumber}</td>
      <td>{flight.airline}</td>
      <td>{flight.origin}</td>
      <td>{flight.destination}</td>
      <td>{new Date(flight.departureTime).toLocaleString()}</td>
      <td>{flight.status}</td>
    </tr>
  );
};

export default FlightRow;
