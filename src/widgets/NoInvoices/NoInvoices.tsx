import React from "react";
import empty from "../../assets/illustration-empty.svg";
const NoInvoices = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[45px] pt-[102px]">
      <img src={empty} alt="girl" />
      <h1 className="font-bold text-[1.5rem] mt-10 mb-5">
        There is nothing here
      </h1>
      <p className="text-center text-gray-300 font-medium">
        Create an invoice by clicking the{" "}
        <span className="text-gray-500 font-bold">New</span> button and get
        started
      </p>
    </div>
  );
};

export default NoInvoices;
