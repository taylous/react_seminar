import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Header from './components/common/Header.jsx';

import './index.css';
import Temp from './components/Temp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
