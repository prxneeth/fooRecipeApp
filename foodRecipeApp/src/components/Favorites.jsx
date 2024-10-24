import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import { GobalContext } from "../Context";

const Favorites = () => {
  const { favorites } = useContext(GobalContext);

  return (
    <div className="p-5 mt-5 flex flex-wrap justify-center gap-10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <h1>No Favorites Added.</h1>
        </div>
      )}
    </div>
  );
};

export default Favorites;
