import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const Cuisine = () => {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);
  console.log(params.type);
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&cuisine=${name}`
    );
    const cuisineApi = await data.json();
    setCuisine(cuisineApi.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  console.log(cuisine);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="my-10 flex justify-center items-center gap-10 flex-wrap">
      {cuisine?.map((indi) => (
        <Link to={"/recipe/" + indi.id}>
          <div className=" w-48 cursor-pointer">
            <img
              src={indi.image}
              className=" w-full object-cover  rounded-md"
              alt=""
            />
            <h2 className=" text-sm truncate mt-5">{indi.title}</h2>
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Cuisine;
