import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Provider/AuthProvider';
import LayOut from './MainLayOutt/LayOut';
import Home from './Pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/logIn",
        element:<LogIn/>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  
)
