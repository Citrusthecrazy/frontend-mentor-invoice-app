import moment from "moment";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, numberWithCommas } from "../../util/Formatters";
import InvoiceStatus from "../InvoiceStatus/InvoiceStatus";

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
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-lg flex flex-row justify-between p-6 hover:cursor-pointer dark:bg-darkerBlue dark:text-white" onClick={() => navigate(`/invoice/${id}`)}>
      <div className="flex flex-col gap-6">
        <p className="text-gray-500 font-bold">
          #
          <span className="text-black dark:text-white">{id.toUpperCase()}</span>
        </p>
        <div className="flex flex-col">
          <p className="text-gray-500 dark:text-gray-100 text-lg">
            Due {moment(dueDate).format("DD MMM YYYY")}
          </p>
          <p className="text-xl font-bold">£{numberWithCommas(amount)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-right justify-between">
        <p className="text-gray-500 font-medium tracking-[-0.25px] dark:text-white">
          {customerName}
        </p>
        <InvoiceStatus status={status}/>
      </div>
    </div>
  );
};

export default InvoiceCard;
