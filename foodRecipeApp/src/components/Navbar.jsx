import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GobalContext } from "../Context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GobalContext);

  return (
    <nav className=" flex  items-center justify-between bg-violet-400  p-4 shadow-md shadow-gray-400">
      <Link to="/">
        {" "}
        <h2 className="ml-5 mr-3 ">FooDFooD </h2>
      </Link>
      <form onSubmit={handleSubmit} className="w-2/4  mr-4">
        {" "}
        <input
          className=" w-4/5 h-7 rounded-3xl outline-none border-none shadow-lg focus:shadow-purple-600 shadow-black p-1 px-5"
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="search a recipe"
        />
      </form>

      <Link to="/">
        <p className="flex-1 mr-4">HOME</p>
      </Link>
      <Link to="/components/Favorites">
        <p className=" mr-5 ">FAVORITES</p>
      </Link>
    </nav>
  );
};

export default Navbar;
