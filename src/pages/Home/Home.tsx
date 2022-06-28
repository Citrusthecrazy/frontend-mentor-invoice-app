import React, { useEffect } from "react";
import { Button, Filter, InvoiceCard } from "../../components";
import data from "../../data.json";
import { Invoice } from "../../util/types";
import { NoInvoices } from "../../widgets";
const Home = () => {
  return (
    <div className="pt-[6.5rem] pb-6 px-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end items-start">
          <h1 className=" font-bold text-[20px] leading-5">Invoices</h1>
          <p className=" font-light text-gray-400">{data.length} invoices</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Filter />
          <Button icon className="text-lg">
            New
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8">
        {data ? (
          data.map((item: Invoice) => (
            <InvoiceCard
              key={item.id}
              id={item.id}
              customerName={item.clientName}
              dueDate={item.paymentDue}
              amount={item.total}
              status={item.status}
            />
          ))
        ) : (
          <NoInvoices />
        )}
      </div>
    </div>
  );
};

export default Home;
