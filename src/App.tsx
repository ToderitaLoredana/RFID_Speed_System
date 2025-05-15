import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './index.css';

function App() {
  useEffect(() => {
    // Update title
    document.title = 'MTraffic | RFID Speed Tracking System';
  }, []);

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;