import FormRow from "../../ui/FormRow";

function TransactionsForm() {
  return (
    <form className="max-w-[400px] overflow-y-auto">
      <p className="text-2xl font-semibold font-almarai">Add new transaction</p>

      <FormRow label="Title*">
        <input
          type="text"
          placeholder="Name of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <FormRow label="Type*">
        <div className="inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-[100%]">
          <input
            id="bordered-radio-1"
            checked
            type="radio"
            value="INCOME"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium ">
            Income
          </label>
        </div>

        <div className="inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 w-[100%]">
          <input
            checked
            id="bordered-radio-2"
            type="radio"
            value="EXPENSE"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium">
            Expense
          </label>
        </div>
      </FormRow>

      <FormRow label="Amount*">
        <input
          type="number"
          name="money"
          placeholder="Amount of money"
          className="bg-slate-100 outline outline-1 outline-gray-400  focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <FormRow label="Description">
        <textarea
          type="textarea"
          placeholder="Description of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-24 w-72 p-2"
        />
      </FormRow>

      <FormRow label="Date*">
        <input
          type="date"
          placeholder="Date of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>
    </form>
  );
}

export default TransactionsForm;
