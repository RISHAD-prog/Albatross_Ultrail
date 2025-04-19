// src/main.jsx or src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'       // <-- REMOVE THIS
import 'bootstrap/dist/css/bootstrap.min.css' // <-- REMOVE THIS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // <-- KEEP ONLY IF NEEDED for specific Bootstrap JS components (like dropdowns, togglers)
// import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";                              // <-- KEEP THIS (Contains Tailwind/DaisyUI)
import routers from './components/Routes/Routes.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
);