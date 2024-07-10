import React from 'react';
import FlightTable from '../components/FlightTable';

const FlightBoard: React.FC = () => {
  return (
    <div className="flight-board min-h-screen py-5 w-full flex justify-center items-center flex-col bg-gradient-to-r from-violet-900 via-violet-700 to-blue-400">
      <h1 className='text-3xl font-bold font-Montserrat text-white pb-4'>Flight Status Board</h1>
      <div className='md:w-[85%] w-full shadow-xl shadow-slate-600 rounded-3xl '>
        
      <FlightTable />
      
      </div>
    </div>
  );
};

export default FlightBoard;
