import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// importing
import Const from "../pages/construction";
import Home from "../pages/home";
import CaseStudy from "../pages/caseStudy";
import Categories from "../pages/categories";
import Playground from "../pages/playground/playground";
// import Nav from "../components/nav";
import ToTop from "./scrollToTop";

const Routing = () => {
  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" element={<Const />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/caseStudy" element={<CaseStudy />} />
        <Route exact path="/playground" element={<Playground />} />

        {/* default routes for invalid links */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
