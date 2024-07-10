import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import FlightBoard from './pages/FlightBoard';
import FlightDetailPage from './pages/FlightDetailPage';


const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<FlightBoard/>
    },
    {
      path: "flight/:id",
      element:<FlightDetailPage/>,
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
