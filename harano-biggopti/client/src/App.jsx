import React from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import Home from './components/home/home';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;