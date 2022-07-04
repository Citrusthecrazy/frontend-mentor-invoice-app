import { useParams } from "react-router-dom";
import { BackButton } from "../../components";

const EditInvoice = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col pt-[104px]">
      <BackButton to={`/invoice/${id}`} />
      <h1 className="mx-6 mt-6 text-3xl font-bold dark:text-white">
        Edit <span className="text-gray-500">#</span>
        {id}
      </h1>
      <h2 className="mx-6 mt-6 text-md font-bold text-purple">Bill from</h2>
    </div>
  );
};

export default EditInvoice;
