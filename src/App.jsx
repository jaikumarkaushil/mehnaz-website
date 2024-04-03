import Navigation from "./Navigation";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
