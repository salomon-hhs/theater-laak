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
import reportWebVitals from './reportWebVitals';
import { EvenementenPagina } from './EvenementPagina/ContentEV';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>
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
    path: "/Evenementen",
    element: <Layout><EvenementenPagina/></Layout> 
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
