import { useSelector } from "react-redux";

import { getTransactions } from "../../Transactions/transactionsSlice";
import OneTransaction from "./OneTransaction";

function TransactionsCard() {
  const transactions = useSelector(getTransactions).slice(0, 5);

  return (
    <div className="w-[100%] bg-white rounded-lg shadow-xl p-4 min-h-[350px]">
      <p className="font-bold text-lg">
        {transactions.length === 0
          ? "Last transactions"
          : transactions.length === 1
            ? "Last transactions"
            : `Last ${transactions.length} transactions`}
      </p>
      {transactions.length !== 0 ? (
        transactions.map((transaction) => (
          <OneTransaction key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <div className="flex justify-center items-center h-[350px] font-bold text-gray-500 text-xl">
          Plase add your first transaction!
        </div>
      )}
    </div>
  );
}

export default TransactionsCard;
