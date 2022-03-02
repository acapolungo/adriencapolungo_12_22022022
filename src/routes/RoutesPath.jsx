import React from 'react'
import { Routes, Route } from 'react-router-dom';

// système de rooting de base
import Hub from '../pages/Hub/Hub';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error404 from '../components/Error/Error404';


export default function RoutesPath() {
  /**
  * Routes
  */
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/user/:userId" element={<Dashboard />} />
      <Route path="/*" element={<Error404 error="Il y a eu une erreur" />} />
    </Routes>
  )
}
