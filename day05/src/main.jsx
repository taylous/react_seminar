import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import ContextPlayground from './containers/ContextPlayground';
import ReduxPlayground from './containers/ReduxPlayground.jsx';
import ZustandPlayground from './containers/ZustandPlayground.jsx';
import TodoPlayground from './containers/TodoPlayground.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextPlayground />} />
        <Route path="/redux" element={<ReduxPlayground />} />
        <Route path="/zustand" element={<ZustandPlayground />} />
        <Route path="/todo" element={<TodoPlayground />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
