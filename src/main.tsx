import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './app/ErrorPage'
import Layout from './app/Layout'

// const AboutPage = React.lazy(() => import("./app/Navbar/Navbar"))

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : "/",
        index : true,
        element : <App/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 <RouterProvider router= {router} />
  </React.StrictMode>,
)
