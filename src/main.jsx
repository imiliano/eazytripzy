import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import './styles.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter } from 'react-router-dom';
import { ZyApp } from './ZyApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ZyApp />
    </BrowserRouter>
  </StrictMode>,
)
