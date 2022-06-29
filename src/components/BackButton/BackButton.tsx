import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icon-arrow-left.svg";
const BackButton = () => {
  return (
    <Link
      to="/"
      className="flex flex-row mx-6 gap-6 justify-start items-baseline dark:text-white">
      <img src={arrowLeft} alt="arrow left" />
      <span className="font-bold">Go Back</span>
    </Link>
  );
};

export default BackButton;
