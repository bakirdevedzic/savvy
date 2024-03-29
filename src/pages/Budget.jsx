import { MdAddBox } from "react-icons/md";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";

import { useState } from "react";
import Modal from "../ui/Modal";

function Budget() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid-rows-[150px_1fr_1fr] grid">
      <div>
        <InfoCard label="Total amount" amount="456845" />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div>
        <Button type="base" onClick={() => setShowModal(true)}>
          <MdAddBox />
          Add new
        </Button>
      </div>
      <div>Tabela</div>
      <Modal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default Budget;
