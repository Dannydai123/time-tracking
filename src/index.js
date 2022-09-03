import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    (


      // domain="dannydai.us.auth0.com"
  // clientId="4iVg2j7tw1oAYhc29KDH5Q64ZGr1vozV"
  //     redirectUri={window.location.origin}
   <React.StrictMode>
    <App />
  </React.StrictMode>
)

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
