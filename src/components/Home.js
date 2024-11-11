import React from "react";
import { Link } from "react-router-dom";
import background from "../Ab.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center min-h-screen"
    >
      <Link to={"/About"}>
        <button className="border-2 p-2 bg-orange-500 text-2xl font-extrabold rounded-md">
          Click Kariye Nav
        </button>
      </Link>
    </div>
  );
};

export default Home;
