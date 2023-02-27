import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();

  const [tabs, setTabs] = useState("instructions");

  const [details, setDetails] = useState({});

  const recipeDetail = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const data = await api.json();
    setDetails(data);
  };

  useEffect(() => {
    recipeDetail(params.recipeName);
  }, [params]);
  console.log(details);
  return (
    <div className=" m-10 flex">
      <div className=" flex-1">
        <h1 className=" text-xl font-bold mb-5">{details.title}</h1>
        <img src={details.image} width="350px" alt="" />
      </div>
      <div className=" flex-1">
        <div className=" mb-5">
          <button
            className=" bg-slate-600 p-3 rounded-md text-white mr-3"
            onClick={() => setTabs("instructions")}>
            Instructions
          </button>
          <button
            className=" border p-3 border-slate-600 rounded-md"
            onClick={() => setTabs("ingredients")}>
            Ingredients
          </button>
        </div>
        {tabs === "instructions" ? (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        ) : (
          <ul className=" ml-5">
            {details.extendedIngredients.map((indi) => (
              <li className=" list-decimal">{indi.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
