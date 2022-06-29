import React from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
const Filter = () => {
  return (
    <div className="flex flex-row gap-2 items-center hover:cursor-pointer dark:text-white">
      <p className="hidden sm:block">Filter by status</p>
      <p className="font-bold sm:hidden">Filter</p>
      <img src={arrowDown} alt="arrow down" className="w-3 h-2" />
    </div>
  );
};

export default Filter;
