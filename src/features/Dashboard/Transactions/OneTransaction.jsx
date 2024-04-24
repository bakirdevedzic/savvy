import { formatCurrency } from "../../../utils/helpers";

function OneTransaction({ transaction }) {
  const typeBackground =
    transaction.type === "INCOME"
      ? "bg-green-200 border-green-500 text-green-700"
      : "bg-red-200 border-red-500 text-red-700";

  return (
    <div className="rounded-xl font-poppins bg-slate-100 p-3 border-black flex flex-row justify-between gap-1 flex-wrap m-2 min-h-[50px] items-center">
      <div className="w-[40rem] flex justify-center font-semibold">
        {transaction.name}
      </div>
      <div
        className={`w-[5rem] flex justify-center rounded-lg border ${typeBackground}`}
      >
        {transaction.type}
      </div>
      <div className="w-[5rem] flex justify-end font-bold">
        {formatCurrency(transaction.amount)}
      </div>
    </div>
  );
}

export default OneTransaction;
