const calculateCategoryStats = (
  transactions,
  incomeCategories,
  expenseCategories,
  days
) => {
  const today = new Date();
  const periodOfTime = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredTransactions = transactions.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.date);
    if (transactionDate >= periodOfTime) {
      acc.push(transaction);
    }
    return acc;
  }, []);

  const transformedIncomeCategories = incomeCategories.map((category) => {
    const matchingTransactions = filteredTransactions.filter(
      (transaction) =>
        transaction.category_id === category.id && transaction.type === "INCOME"
    );

    const totalAmount = matchingTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    const transactionCount = matchingTransactions.length;

    return {
      ...category,
      transactions: transactionCount,
      amount: totalAmount,
    };
  });

  const transformedExpenseCategories = expenseCategories.map((category) => {
    const matchingTransactions = filteredTransactions.filter(
      (transaction) =>
        transaction.category_id === category.id &&
        transaction.type === "EXPENSE"
    );

    const totalAmount = matchingTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    const transactionCount = matchingTransactions.length;

    return {
      ...category,
      transactions: transactionCount,
      amount: totalAmount,
    };
  });

  return {
    income: transformedIncomeCategories,
    expense: transformedExpenseCategories,
  };
};

export default calculateCategoryStats;
