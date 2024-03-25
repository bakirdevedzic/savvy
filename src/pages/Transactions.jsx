import TransactionsTable from "../features/Transactions/TransactionsTable";
import TransactionsFilters from "../features/Transactions/TransactionsFilters";
import Button from "../ui/Button";
import { MdAddBox } from "react-icons/md";

function Transactions() {
  return (
    <main className="grid grid-rows-[70px_1fr] mt-10 max-w-[1700px] w-[100%]">
      <div className="p-2 flex items-center align-middle justify-between bg-white gap-3 overflow-hidden rounded-md">
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
