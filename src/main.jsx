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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
