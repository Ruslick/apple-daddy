import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'
import './assets/styles/normal.css'
import './assets/styles/_spacing.css'
import './assets/styles/_colors.css'
import { App } from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

