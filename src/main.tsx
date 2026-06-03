import '@/index.css';
import * as React from 'react';
import { AppPage } from '@/app-page';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppPage />
  </React.StrictMode>,
);
