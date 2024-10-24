import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col bg-violet-200 p-5 w-80 overflow-hidden shadow-md shadow-violet-300 rounded-lg">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div className="text-md text-black p-1 mt-3">{item.publisher}</div>
      <h3 className="p-1 text-purple-500">{item.title}</h3>
      <Link
        to={`/components/Details/${item.id}`}
        className="p-1 flex justify-center items-center mt-3 border-red-100 h-8 bg-black rounded-lg hover:bg-gray-800"
      >
        Recipe Details
      </Link>
    </div>
  );
};

export default RecipeItem;
