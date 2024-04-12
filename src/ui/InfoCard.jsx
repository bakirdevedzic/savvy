import { formatCurrency } from "../utils/helpers";

function InfoCard1({ label, amount, color }) {
  return (
    <div className="flex flex-col min-w-[250px] h-[120px] bg-white rounded-lg shadow-xl p-4 gap-3">
      <div className="font-almarai font-bold text-slate-400">{label}</div>
      <div
        className={
          color
            ? color === "green"
              ? "text-green-500 font-poppins font-bold text-3xl us:text-2xl"
              : color === "red"
                ? "text-red-500 font-poppins font-bold text-3xl us:text-2xl"
                : "font-poppins font-bold text-slate-800 text-3xl us:text-2xl"
            : "font-poppins font-bold text-slate-800 text-3xl us:text-2xl"
        }
      >
        {amount !== null ? formatCurrency(amount) : "No data"}
      </div>
    </div>
  );
}

export default InfoCard1;
