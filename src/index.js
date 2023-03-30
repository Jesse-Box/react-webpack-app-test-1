import { createRoot } from 'react-dom/client';
import React from 'react';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://36d476f30112490886ebf7af8a69ce80@o4504792325292032.ingest.sentry.io/4504792408850432",
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
      <button onClick={() => methodDoesNotExist()}>Send Error</button>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
