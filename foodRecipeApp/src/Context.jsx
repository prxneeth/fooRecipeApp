import React, { createContext, useState } from "react";

export const GobalContext = createContext(null);

const Context = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);

  console.log(loading, recipeList);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    let copyFavorites = [...favorites];

    const index = copyFavorites.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      copyFavorites.push(getCurrentItem);
    } else {
      copyFavorites.splice(getCurrentItem);
    }
    setFavorites(copyFavorites);
  }
  console.log(favorites);
  return (
    <GobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorites,
        favorites,
      }}
    >
      {children}
    </GobalContext.Provider>
  );
};

export default Context;
