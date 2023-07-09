import React from "react";
import { loader } from "../../utils/images";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader flex align-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
