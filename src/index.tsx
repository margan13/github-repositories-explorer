import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/index.css';
import App from 'src/App';
import ReactQueryClientProvider from 'src/providers/ReactQueryClientProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReactQueryClientProvider>
      <App />
    </ReactQueryClientProvider>
  </React.StrictMode>,
);
