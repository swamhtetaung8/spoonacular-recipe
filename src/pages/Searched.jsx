import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Searched = () => {
  const params = useParams();
  const [searchedData, setSearchData] = useState([]);
  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&query=${name}`
    );
    const data = await api.json();
    console.log(data);
    setSearchData(data.results);
  };
  useEffect(() => {
    getSearched(params.searched);
  }, [params]);
  return (
    <div>
      <div className="my-10 flex justify-center items-center gap-10 flex-wrap">
        {searchedData?.map((indi) => (
          <Link to={"/recipe/" + indi.id}>
            <div className=" w-48 cursor-pointer" key={indi.id}>
              <img
                src={indi.image}
                className=" w-full object-cover  rounded-md"
                alt=""
              />
              <h2 className=" text-sm truncate mt-5">{indi.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searched;
