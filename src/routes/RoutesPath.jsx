import React from 'react'
import { Routes, Route } from 'react-router-dom';

// système de rooting de base
import Hub from '../pages/Hub/Hub';

export default function RoutesPath() {

  return (
      <Routes>
        <Route path="/:id" element={<Hub />} />
        {/* <Route path="/*" element={<Error404 />} /> */}
      </Routes>
  )
}
