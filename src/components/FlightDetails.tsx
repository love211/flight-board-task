import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flight } from '../types/Flight';
import { fetchFlightDetails } from '../services/api';
import ErrorMessage from './ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import plangif from '../flying-airplane.gif'

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFlightDetails = async () => {
      try {
        const data = await fetchFlightDetails(id);
        setFlight(data);
      } catch (error) {
        setError('Error fetching flight details');
      }
    };

    loadFlightDetails();
  }, [id]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!flight) {
    return <div className='flex justify-center items-center py-10'> <img className='object-cover origin-center h-20' src={plangif} alt="" /></div>;
  }

  // <h2>Flight Details for {flight.flightNumber}</h2>
  //     <p><strong>Airline:</strong> {flight.airline}</p>
  //     <p><strong>Origin:</strong> {flight.origin}</p>
  //     <p><strong>Destination:</strong> {flight.destination}</p>
  //     <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
  //     <p><strong>Status:</strong> {flight.status}</p>
  return (
    <div className=" w-full px-4 pb-9 py-6  font-Montserrat">
     
      <div className='flex justify-between items-center w-full flex-col sm:flex-row'>
        <div className='flex flex-col items-center justify-center py-6'>
        <FontAwesomeIcon className='text-4xl py-2 hover:scale-125 transition-all ease-linear duration-300' icon={faPlaneDeparture} />
          <p className='text-center font-semibold text-xl'>Flight Origin </p>
          <p>{flight.origin}</p>
        </div>
        <div   className='flex flex-col items-center justify-center'>
          <div className='text-xl w-full text-center'><span className='font-semibold'>Flight Details For:</span> <span className='font-Raleway'>{flight.flightNumber}</span>
          <p className='text-base text-center'> <span className='text-lg font-semibold'> Airline Details:</span> {flight.airline}</p>
          
          </div>
          <div className='flex flex-col items-center justify-center py-6'>
            <p className='text-center font-semibold text-lg font-Raleway animate-pulse border border-black p-2'>{new Date(flight.departureTime).toLocaleString()}</p>
            <p className='text-gray-500 text-lg'>Departure Time</p>
            <div className='text-lg flex items-center justify-center space-x-2'>Status :  {flight.status}</div>
            
          </div>
        </div>
        <div  className='flex flex-col items-center justify-center'>
        <FontAwesomeIcon  className='text-4xl py-2  hover:scale-125 transition-all ease-linear duration-300'  icon={faPlaneArrival} />
        <p className='text-center  font-semibold text-xl'>Flight Destination: </p>
        <p>{flight.destination}</p>
        </div>
      </div>
      
    </div>
  );
};

export default FlightDetails;
