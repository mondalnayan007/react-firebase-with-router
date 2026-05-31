import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

import Register from './Pages/Home/Register/Register';
import AuthProvider from './Context/AuthProvider';

import Phones from './Pages/Phone/Phones';
import PhoneDetails from './Pages/Phone/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        path:'/',
        Component: Home
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/products',
        Component: Products
      },
      {
        path:'/product-details/:id',
        loader : ({params })=>{return fetch(`https://fakestoreapi.com/products/${params.id}`)},
        Component: ProductDetails
      },
      {
        path:'/register',
        Component: Register
      },
      {
        path:'/phones',
        loader : ()=>fetch('http://localhost:4000/phones'),
        Component: Phones
      },
      {
        path:'/phone-details/:id',
        loader : ({params })=>{return fetch(`http://localhost:4000/phones/${params.id}`)},
        Component: PhoneDetails
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
  </StrictMode>,
)
