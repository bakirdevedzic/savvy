function TransactionsFilters() {
  return (
    <div className="flex flex-cols justify-between items-center gap-3 h-[100%]">
      <div className="grid grid-cols-3 w-[300px] bg-primary-white-2 rounded-lg h-[70%]">
        <button className="text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 rounded-l-lg border-2">
          All
        </button>
        <button className="text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 border-2">
          Incomes
        </button>
        <button className="text-almarai font-medium hover:bg-primary-blue hover:text-primary-white-2 rounded-r-lg border-2">
          Expenses
        </button>
      </div>

      <input
        className="mr-10 bg-primary-white-2 font-roboto font-bold h-[38px] rounded-md border-2"
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
      />
    </div>
  );
}

export default TransactionsFilters;
