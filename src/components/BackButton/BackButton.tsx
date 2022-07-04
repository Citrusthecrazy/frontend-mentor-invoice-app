import React, { FC } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icon-arrow-left.svg";

interface IBackButton {
  to?: string;
}

const BackButton: FC<IBackButton> = ({ to = "/" }) => {
  return (
    <Link
      to={to}
      className="flex flex-row mx-6 gap-6 justify-start items-baseline dark:text-white">
      <img src={arrowLeft} alt="arrow left" />
      <span className="font-bold">Go Back</span>
    </Link>
  );
};

export default BackButton;
