import { createRoot } from 'react-dom/client';
import React from 'react';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://0391a7a5b9364d869c76b5b1fbdd18b2@o925438.ingest.sentry.io/4504485362139136',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <div>
      <h1>This is my React app!</h1>
      <div>
        <button onClick={() => methodDoesNotExist()}>Send Error</button>
      </div>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
