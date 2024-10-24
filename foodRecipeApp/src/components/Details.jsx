import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GobalContext } from "../Context";

const Details = () => {
  const { recipeDetails, setRecipeDetails, handleAddToFavorites, favorites } =
    useContext(GobalContext);

  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 p-10 gap-6">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl groud">
            <img
              src={recipeDetails?.recipe.image_url}
              alt="fe"
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex p-1 flex-col gap-3">
          <div className="text-md text-white  mt-3 p-1 ">
            <h2 className="text-4xl  ">{recipeDetails?.recipe.title}</h2>
            <h4 className=" text-purple-500">
              Publishers : {recipeDetails?.recipe.publisher}
            </h4>
            <span
              onClick={() => handleAddToFavorites(recipeDetails?.recipe)}
              className=" flex justify-center w-48 items-center mt-8 border-red-100 h-10 bg-black rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              {favorites &&
              favorites.length > 0 &&
              favorites.findIndex(
                (item) => item.id === recipeDetails?.recipe.id
              ) !== -1
                ? "Remove From Favorites"
                : "Add To Favorites"}
            </span>
          </div>
          <div className="p-2">
            <span className="p-1">
              <h1>Ingredients</h1>
            </span>
            <ul className="flex flex-col gap-3 px-2 ">
              {recipeDetails?.recipe.ingredients.map((ingredient) => (
                <li className="list-none text-xl">
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
