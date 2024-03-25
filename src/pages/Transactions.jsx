import TransactionsTable from "../features/Transactions/TransactionsTable";
import TransactionsFilters from "../features/Transactions/TransactionsFilters";
import Button from "../ui/Button";
import { MdAddBox } from "react-icons/md";

function Transactions() {
  return (
    <main className="grid grid-rows-[70px_1fr] mt-10">
      <div className="p-2 grid grid-cols-[1fr_1fr] align-middle bg-white">
        <Button type="base">
          <MdAddBox />
          Add new
        </Button>
        <TransactionsFilters />
      </div>
      <TransactionsTable />
    </main>
  );
}

export default Transactions;
