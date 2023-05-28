import React from "react";
import ReactDOM from "react-dom/client";
import { SmartMessage } from "smart-message-widget";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SmartMessage domain={""} token={""} showError={false} welcomeMessage={""} />
  </React.StrictMode>
);
