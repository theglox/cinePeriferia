import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import Header from "../../ui/components/header/Header";
import Footer from "../../ui/components/Footer/Footer";
import Detail from "../pages/detail/Details";

export const MoviesRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/catalog/:id" element={<Detail />} />
        {/* default path */}

        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
      <Footer />
    </>
  );
};
