import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { PointsContextProvider } from './global/PointsContext';
import { Home } from './pages/Home';

export default function App() {
  return (
    <PointsContextProvider>
      <StatusBar style='auto' />
      <Home />
    </PointsContextProvider>
  );
}
