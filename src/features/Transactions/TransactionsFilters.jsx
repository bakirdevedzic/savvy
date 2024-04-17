function TransactionsFilters({ filter, setFilter, dateFilter, setDateFilter }) {
  return (
    <div className="flex flex-cols justify-between items-center gap-3 h-[55px] sm:w-[100%] sm:justify-center us:grid us:grid-rows-2 us:gap-3 us:h-auto us:justify-items-center us:items-center">
      <div className="grid grid-cols-3 w-[300px] bg-primary-white-2 rounded-lg h-[70%]">
        <button
          className={`text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 rounded-l-lg border-2 ${
            filter === "All" && "bg-primary-blue text-primary-white-2"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 border-2 ${
            filter === "Incomes" && "bg-primary-blue text-primary-white-2"
          }`}
          onClick={() => setFilter("Incomes")}
        >
          Incomes
        </button>
        <button
          className={`text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 rounded-r-lg border-2 ${
            filter === "Expenses" && "bg-primary-blue text-primary-white-2"
          }`}
          onClick={() => setFilter("Expenses")}
        >
          Expenses
        </button>
      </div>

      <input
        className="mr-10 bg-primary-white-2 font-roboto font-bold h-[38px] rounded-md border-2 xl:w-[130px]"
        type="date"
        id="start"
        name="trip-start"
        placeholder="dd-mm-yyyy"
        value={dateFilter === "1970-01-01" ? "" : dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      />
    </div>
  );
}

export default TransactionsFilters;
