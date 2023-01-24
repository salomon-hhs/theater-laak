import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import Layout from './Components/Layout';
import Login from './Components/Login';
import Register from './Components/Register';
import PasswVergeten from './Components/PasswVergeten';
import OverOns from './Components/OverOns';
import Doneren from './DonerenPagina/Doneren';
import reportWebVitals from './reportWebVitals';
import { EvenementenPagina, TicketPagina } from './EvenementPagina/ContentEV';
import { HomePagina } from './HomePagina/ContentHP';
import EvenementenToevoegen from './Components/EvenementenToevoegen';
import PrintTicket from './Components/PrintTicket';
import AdminMenu from './Components/AdminMenu';
import ZaalToevoegen from './Components/ZaalToevoegen';
import Betaling from './Betaalpagina/Betaal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePagina/></Layout>
  },
  {
    path: "/inloggen",
    element: <Layout><Login /></Layout>
  },
  {
    path: "/registreren",
    element: <Layout><Register /></Layout>
  },
  {
    path: "/wachtwoord_vergeten",
    element: <Layout><PasswVergeten /></Layout>
  },
  {
    path: "/over-ons",
    element: <Layout><OverOns /></Layout>
  },
  {
    path: "/print-ticket",
    element: <Layout><PrintTicket/></Layout> 
 },
 {
  path: "/evenementen-toevoegen",
  element: <Layout><EvenementenToevoegen/></Layout> 
},
{
  path: "/zaal-toevoegen",
  element: <Layout><ZaalToevoegen/></Layout> 
},
{
  path: "/admin",
  element: <Layout><AdminMenu/></Layout> 
},
{
    path: "/Evenementen",
    element: <Layout><EvenementenPagina/></Layout> 
  },
  {
    path: "/doneren",
    element: <Layout><Doneren/></Layout>
  }, 
  {
    path: "/Ticket/:id",
    element: <Layout><TicketPagina/></Layout> 
  },
  {
    path: "/Betaling/:status",
    element: <Layout><Betaling/></Layout>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
