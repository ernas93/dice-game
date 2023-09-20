import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

const App = () => (
  <div>
    <h1>It works!</h1>
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
