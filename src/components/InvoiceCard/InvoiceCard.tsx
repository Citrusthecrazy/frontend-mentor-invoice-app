import moment from "moment";
import React, { FC } from "react";
import { capitalizeFirstLetter, numberWithCommas } from "../../util/Formatters";

interface IInvoiceCard {
  id: string;
  customerName: string;
  dueDate: string;
  amount: number;
  status: string;
}

const InvoiceCard: FC<IInvoiceCard> = ({
  id,
  customerName,
  dueDate,
  amount,
  status,
}) => {
  return (
    <div className="bg-white rounded-lg flex flex-row justify-between p-6 hover:cursor-pointer">
      <div className="flex flex-col gap-6">
        <p className="text-gray-500 font-bold">
          #<span className="text-black">{id.toUpperCase()}</span>
        </p>
        <div className="flex flex-col">
          <p className="text-gray-500 text-lg">
            Due {moment(dueDate).format("DD MMM YYYY")}
          </p>
          <p className="text-xl font-bold">£{numberWithCommas(amount)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-right">
        <p className="text-gray-500 font-medium tracking-[-0.25px]">
          {customerName}
        </p>
        <div
          className={`font-bold rounded-md h-full flex flex-row min-w-[104px]
                          items-center justify-center gap-2 ${
                            status === "paid"
                              ? "bg-paleGreen text-brightGreen "
                              : status == "pending"
                              ? "bg-paleOrange text-brightOrange"
                              : "bg-dirtyWhite text-darkBlue"
                          }`}>
          <div
            className={`w-2 h-2 ${
              status === "paid"
                ? "bg-brightGreen"
                : status === "pending"
                ? "bg-brightOrange"
                : "bg-darkBlue"
            }  rounded-full`}
          />
          <span>{capitalizeFirstLetter(status)}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
