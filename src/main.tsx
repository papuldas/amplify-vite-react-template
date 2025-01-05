
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Authenticator><App /></Authenticator>
    </BrowserRouter>

  </React.StrictMode>
);