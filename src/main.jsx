
import ReactDOM from "react-dom/client";

import "./index.css";
import CinemaApp from "./CinemaApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <CinemaApp />
    </BrowserRouter>

);
