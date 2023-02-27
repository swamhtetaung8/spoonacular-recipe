import React from "react";
import { CiPizza } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Category = () => {
  return (
    <div className=" flex items-center justify-center gap-3">
      <NavLink to="/cuisine/italian">
        <div
          className={
            " flex items-center justify-center flex-col border w-24 h-24 gap-2 rounded-full hover:bg-slate-400 hover:text-white transition-all hover:border-slate-400 cursor-pointer"
          }>
          <CiPizza />
          <p className=" text-sm">Italian</p>
        </div>
      </NavLink>

      <NavLink to="/cuisine/american">
        <div
          className={
            " flex items-center justify-center flex-col border w-24 h-24 gap-2 rounded-full hover:bg-slate-400 hover:text-white transition-all hover:border-slate-400 cursor-pointer"
          }>
          <FaHamburger />
          <p className=" text-sm">American</p>
        </div>
      </NavLink>

      <NavLink to="/cuisine/thai">
        <div
          className={
            " flex items-center justify-center flex-col border w-24 h-24 gap-2 rounded-full hover:bg-slate-400 hover:text-white transition-all hover:border-slate-400 cursor-pointer"
          }>
          <GiNoodles />
          <p className=" text-sm">Thai</p>
        </div>
      </NavLink>

      <NavLink to="/cuisine/japanese">
        <div
          className={
            " flex items-center justify-center flex-col border w-24 h-24 gap-2 rounded-full hover:bg-slate-400 hover:text-white transition-all hover:border-slate-400 cursor-pointer"
          }>
          <GiChopsticks />
          <p className=" text-sm">Japanese</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Category;
