import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, InvoiceStatusCard } from "../../components";
import data from "../../data.json";
import { Invoice } from "../../util/types";

const InvoiceDetails = () => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    setInvoice(getInvoiceById(id));
    return () => {
      setInvoice(null);
    };
  }, [id]);

  return (
    <div className="flex flex-col pt-[104px] px-6">
      <BackButton />
      {invoice && (
        <InvoiceStatusCard className="mt-8" status={invoice.status} />
      )}
      {invoice && (
        <div className="mt-4 bg-white rounded-lg p-6 flex flex-col">
          <span className="font-bold text-gray-500">
            #<span className="text-black">{id}</span>
          </span>
          <p className="text-gray-500">{invoice.description}</p>
          <div className="mt-[30px] text-gray-500">
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </div>
          <div className="flex flex-row mt-8 justify-between">
            <div className="flex flex-col justify-between items-start gap-8">
              <div>
                <p className="text-gray-500">Invoice Date</p>
                <span className="font-bold text-xl">
                  {moment(invoice.createdAt).format("DD MMM YYYY")}
                </span>
              </div>
              <div>
                <p className="text-gray-500">Payment Due</p>
                <span className="font-bold text-xl">
                  {moment(invoice.paymentDue).format("DD MMM YYYY")}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-8">
              <div>
                <p className="text-gray-500">Bill To</p>
                <span className="font-bold text-xl">{invoice.clientName}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-gray-500">
                  {invoice.clientAddress.street}
                </span>
                <span className="text-gray-500">
                  {invoice.clientAddress.city}
                </span>
                <span className="text-gray-500">
                  {invoice.clientAddress.postCode}
                </span>
                <span className="text-gray-500">
                  {invoice.clientAddress.country}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-9">
            <span className="text-gray-500">Sent to</span>
            <p className="font-bold text-xl">{invoice.clientEmail}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-t-lg overflow-hidden mt-10">
            {invoice.items.map((item) => (
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-gray-400 font-bold">
                    {item.quantity} x £{item.price.toFixed(2)}
                  </span>
                </div>
                <span className="self-center font-bold">
                  £ {item.total.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center bg-darkBlue text-white p-6 rounded-b-lg">
            <span className="text-sm font-light">Grand Total</span>
            <span className="font-bold text-2xl">
              £{invoice.total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const getInvoiceById = (id: string) => {
  const invoice = data.find((inv: Invoice) => inv.id === id);
  if (invoice) return invoice;
  return null;
};

export default InvoiceDetails;
