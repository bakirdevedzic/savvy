import TransactionsTable from "../features/Transactions/TransactionsTable";
import TransactionsFilters from "../features/Transactions/TransactionsFilters";
import Button from "../ui/Button";

function Transactions() {
  return (
    <main className="grid grid-rows-[70px_1fr] mt-10">
      <div className="bg-blue-500">
        <Button></Button>
        <TransactionsFilters />
      </div>
      <TransactionsTable />
    </main>
  );
}

export default Transactions;
