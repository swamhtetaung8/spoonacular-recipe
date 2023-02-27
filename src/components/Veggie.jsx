import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=9&tags=vegetarian`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  useEffect(() => {
    getVeggie();
  }, []);
  // console.log(veggie);
  return (
    <div>
      <div className="my-10">
        <h2 className=" text-2xl mb-10">Our vegetarian dishes</h2>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}>
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <div className=" relative min-h-[15rem] rounded-md overflow-hidden cursor-pointer">
                  <p className=" absolute z-30 mb-5 text-center w-full font-medium truncate text-white bottom-[10px] px-5 text-sm">
                    {recipe.title}
                  </p>
                  <img
                    src={recipe.image}
                    className=" w-full h-full object-cover absolute left-0 top-0"
                    alt=""
                  />
                  <div className=" absolute z-20 top-0 w-full h-full bg-gradient-to-b from-transparent to-slate-600 opacity-50"></div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Veggie;
