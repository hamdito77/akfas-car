import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Failed to find the root element');
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    // Display a fallback UI
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; text-align: center;">
          <div>
            <h1 style="font-size: 24px; margin-bottom: 16px;">Something went wrong</h1>
            <p style="color: #666;">Please try refreshing the page</p>
          </div>
        </div>
      `;
    }
  }
};

// Initialize the app
renderApp();
