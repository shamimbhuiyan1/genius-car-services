import React from "react";
import sleeping from "../../../Images/404.jpg";
const NotFound = () => {
  return (
    <div>
      <h2 className="text-center">Mechanic is Sleeping</h2>
      <img className="w-100" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
