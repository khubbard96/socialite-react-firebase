import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppModalContainer from "./components/modal/AppModalContainer";
import { CssBaseline } from "@material-ui/core";
import SocialiteDataInterface from "./components/functional/SocialiteDataInterface";
import "reflect-metadata";
import SocialiteUserAuth from "./components/functional/SocialiteUserAuth";

document.documentElement.style.setProperty(
  "--app-height",
  `${window.innerHeight}px`
);

ReactDOM.render(
  <React.StrictMode>
    {/*<SocialiteUserAuth />
    <SocialiteDataInterface />
    <AppModalContainer>
      <App />
    </AppModalContainer>*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
