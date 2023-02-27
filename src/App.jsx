import React from "react";
import Pages from "./pages/Pages";
import "./App.css";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" m-14">
        <Link to="/">
          <h1 className="text-4xl mb-10 cursor-pointer">Dishes</h1>
        </Link>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
};

export default App;
