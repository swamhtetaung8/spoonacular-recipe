import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:searched" element={<Searched />} />
        <Route path="/recipe/:recipeName" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
