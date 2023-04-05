import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Welcom from './components/Welcom/Welcom';
import Login from './components/Login/Login';
import Countries from './components/Countries/Countries';
import Foods from './components/Foods/Foods';
import MeaDetail from './components/MealDetail/MeaDetail';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'home',
        element: <Welcom></Welcom>
      },
      {
        path: 'country',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'foods',
        element: <Foods></Foods>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: 'food/:foodId',
        element: <MeaDetail></MeaDetail>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
