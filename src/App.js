import React from 'react';

import ReactGA from 'react-ga';

import AppRouter from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import { LanguageProvider } from './containers/Language';

import './styles/App.css';

function App() {
  const TRACKING_ID = process.env.TRACKING_ID; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
