import axios from 'axios';
import { Flight } from '../types/Flight';

const API_URL = 'https://flight-status-mock.core.travelopia.cloud/flights';

export const fetchFlights = async (): Promise<Flight[]> => {
  const response = await axios.get<Flight[]>(API_URL);
  return response.data;
};

export const fetchFlightDetails = async (id: string): Promise<Flight> => {
  const response = await axios.get<Flight>(`${API_URL}/${id}`);
  return response.data;
};
