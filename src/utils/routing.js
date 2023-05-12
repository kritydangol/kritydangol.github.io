import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// importing 
import Const from "../pages/construction";
import Home from "../pages/home";
// import Nav from "../components/nav";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Const />} />
        <Route exact path="/home" element={<Home />} />

        {/* default routes for invalid links */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default Routing