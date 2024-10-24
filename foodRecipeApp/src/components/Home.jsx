import React, { useContext } from "react";
import { GobalContext } from "../Context";
import RecipeItem from "./RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GobalContext);

  if (loading) return <div>Loading Please Wait</div>;
  return (
    <div className="p-5 mt-5 flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div
          className="  flex justify-center align-middle "
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="">Nothing here. Search For a Recipe.</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
