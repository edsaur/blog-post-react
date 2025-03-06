import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
      <GlobalStyles />
      <App />
    </ErrorBoundary>
  </StrictMode>
);
