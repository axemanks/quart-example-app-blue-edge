// main.tsx
// Entry point for the React app. Sets up React root, React Router, and Fluent UI provider.
// - Wraps the app in BrowserRouter for routing
// - Wraps the app in FluentProvider to enable Fluent UI styles and theming
// - Imports global styles (index.css)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FluentProvider theme={webLightTheme}>
        <App />
      </FluentProvider>
    </BrowserRouter>
  </StrictMode>
);
