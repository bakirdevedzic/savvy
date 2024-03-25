import TransactionsTable from "../features/Transactions/TransactionsTable";
import TransactionsFilters from "../features/Transactions/TransactionsFilters";
import Button from "../ui/Button";
import { MdAddBox } from "react-icons/md";

function Transactions() {
  return (
    <main className="grid grid-rows-[auto_1fr] mt-10 max-w-[1700px] w-[100%]">
      <div
        className="p-2 flex items-center align-middle justify-between bg-white gap-3 overflow-hidden rounded-md shadow
      sm:grid sm:grid-rows-2 sm:gap-3 sm:w-[100%] sm:justify-center"
      >
        <div className="sm:w-full sm:flex sm:justify-center">
          <Button type="base">
            <MdAddBox />
            Add new
          </Button>
        </div>
        <TransactionsFilters />
      </div>
      <TransactionsTable />
    </main>
  );
}

export default Transactions;
