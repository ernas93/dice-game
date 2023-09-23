import React from 'react';
import { createRoot } from 'react-dom/client';
import Match from './components/Match';

import './index.scss';

const App = () => {
  return <Match />;
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
