import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import PublicSpeaking from "./PublicSpeaking.jsx";
import CareerConsulting from "./CareerConsulting.jsx";
import DecisionMaking from "./DecisionMaking.jsx";
import DigitalMarketing from "./DigitalMarketing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
        <Route path="/public-speaking" element={<PublicSpeaking />} />
        <Route path="/career-consulting" element={<CareerConsulting />} />
        <Route path="/decision-making" element={<DecisionMaking />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
