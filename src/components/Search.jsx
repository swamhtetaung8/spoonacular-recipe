import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    navigate(`/searched/${search}`);
  };
  return (
    <div className=" my-10">
      <form action="" className=" flex justify-center" onSubmit={handleSubmit}>
        <div className=" flex items-center gap-3 bg-slate-700 p-3 rounded-md w-72">
          <CiSearch color="white" />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none bg-transparent text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
