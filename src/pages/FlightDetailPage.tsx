import React from 'react';
import FlightDetails from '../components/FlightDetails';

const FlightDetailPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full space-y-3 md:min-h-screen plan-bg bg-gradient-to-t from-violet-700 to-blue-500 px-2">
      <h1 className='text-3xl font-semibold py-3 font-Raleway text-white'>Flight Details</h1>
      <div className=' md:w-3/2 lg:w-1/2 sm:w-3/2 w-full shadow-xl shadow-violet-400 rounded-xl py-5 border border-violet-600 bg-gradient-to-bl from-gray-50 via-white to-gray-100'>
        <FlightDetails />

      </div>
    </div>
  );
};

export default FlightDetailPage;
