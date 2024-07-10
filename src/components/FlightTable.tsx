import React, { useEffect, useState } from "react";
import { Flight } from "../types/Flight";
import { fetchFlights } from "../services/api";
import FlightRow from "./FlightRow";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import plangif from '../plan_loading.gif'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlightTable: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentpage, SetCurrentPage] = useState(1)
  const [cardsperpage, SetCardsPerPage] = useState(5)

  const loadFlights = async () => {
    try {
      const data = await fetchFlights();
      setFlights(data);

    } catch (error) {

      setError("Error fetching flight data");
    }
  };

  console.log("Flights", flights);

  useEffect(() => {
    loadFlights();
    const interval = setInterval(loadFlights, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (flights.length <= 0) {
    return <div className='flex justify-center  items-start md:pt-32 min-h-screen'> <img className='object-cover origin-center h-32 mix-blend-multiply' src={plangif} alt="" /></div>;
  }


  // Gettig Last & First Index
  const lastindex = currentpage * cardsperpage
  const firstindex = lastindex - cardsperpage


  // Handle Specific Page Click 
  const HandlePageClick = (pageclicked: number) => {
    // alert(pageclicked)
    SetCurrentPage(pageclicked)
  }


  // Handle Prev Page 
  const HandlePrevPage = () => {
    currentpage === 1 ? SetCurrentPage(flights?.length / 5) : SetCurrentPage(currentpage - 1)
  }

  // Handle Next Page 
  const HandleNextPage = () => {
    if (currentpage >= flights.length / 5) {
      SetCurrentPage(1)
    } else {
      SetCurrentPage(currentpage + 1)
    }
  }


  return (
    <>
      <table className="flight-table overflow-x-auto">
        <thead className="font-Montserrat">
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status <div className="h-4 w-4"></div></th>
          </tr>
        </thead>
        <tbody>
          {flights.slice(firstindex, lastindex).map((flight) => (
            <FlightRow key={flight.id} flight={flight} />
          ))}
        </tbody>

      </table>
      <div className="flex justify-center items-center w-full pb-6 pt-2">
        <button onClick={() => HandlePrevPage()} className="px-4 text-2xl  hover:scale-150 transition-all ease-linear duration-300 text-cyan-400">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {
          new Array(flights.length / 5).fill("").map((_, i) => {
            return <>
              <div onClick={() => HandlePageClick(i + 1)} className={`rounded-full  ${currentpage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-black'} w-11 mx-1 h-11 font-Montserrat flex justify-center items-center cursor-pointer transition-all ease-linear duration-200 hover:bg-blue-600 hover:text-white`}>{i + 1}</div>
            </>
          })
        }
        <button onClick={() => HandleNextPage()} className="px-4 text-2xl hover:scale-150 transition-all ease-linear duration-300 text-cyan-400">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};

export default FlightTable;
