import React from "react";
import { Button } from "../../components";

const Home = () => {
  return (
    <div className="pt-[6.5rem] pb-6 px-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end items-start">
          <h1 className=" font-bold text-[20px] leading-5">Invoices</h1>
          <p className=" font-light text-gray-400">7 invoices</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <div>dropdown</div>
          <Button icon className="text-lg">
            New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
