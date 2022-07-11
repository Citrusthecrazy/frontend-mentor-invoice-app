import { useParams } from "react-router-dom";
import { BackButton, InputGroup, TextBox } from "../../components";

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
      <InputGroup className="mx-6 mb-6">
        <label className="text-gray-500">Street address</label>
        <TextBox type="text"/>
      </InputGroup>
      <div className="flex flex-row mb-6">
        <InputGroup className="mx-6">
          <label className="text-gray-500">City</label>
          <TextBox type="text"/>
        </InputGroup>      <InputGroup className="mx-6">
          <label className="text-gray-500">Post Code</label>
          <TextBox type="text"/>
        </InputGroup>
      </div>
    </div>
  );
};

export default EditInvoice;
