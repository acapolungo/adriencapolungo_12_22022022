import React from 'react'
import { Routes, Route } from 'react-router-dom';

// système de rooting de base
import Hub from '../pages/Hub/Hub';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function RoutesPath() {

  return (
      <Routes>
        <Route path="/:userId" element={<Hub />} />
        <Route path="/user/:userId" element={<Dashboard />} />
        {/* <Route path="/*" element={<Error404 />} /> */}
      </Routes>
  )
}
