import React from "react";
import { Button, Filter, InvoiceCard } from "../../components";
const Home = () => {
  return (
    <div className="pt-[6.5rem] pb-6 px-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end items-start">
          <h1 className=" font-bold text-[20px] leading-5">Invoices</h1>
          <p className=" font-light text-gray-400">7 invoices</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Filter />
          <Button icon className="text-lg">
            New
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8">
        <InvoiceCard
          id="RT3080"
          customerName="Marko Drakulic"
          dueDate="12 Dec 2021"
          amount={1800.9}
          status="pending"
        />
      </div>
    </div>
  );
};

export default Home;
