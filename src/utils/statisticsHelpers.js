const calculateIncomeStats = (transactions, incomeCategories, days) => {
  const today = new Date();
  const periodOfTime = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredTransactions = transactions.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.date);
    if (transactionDate >= periodOfTime && transaction.type === "INCOME") {
      acc.push(transaction);
    }
    return acc;
  }, []);

  const transformedIncomeCategories = incomeCategories.map((category) => {
    const matchingTransactions = filteredTransactions.filter(
      (transaction) => transaction.category_id === category.id
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

  return transformedIncomeCategories;
};

const calculateExpenseStats = (transactions, expenseCategories, days) => {
  const today = new Date();
  const periodOfTime = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredTransactions = transactions.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.date);
    if (transactionDate >= periodOfTime && transaction.type === "EXPENSE") {
      acc.push(transaction);
    }
    return acc;
  }, []);

  const transformedExpenseCategories = expenseCategories.map((category) => {
    const matchingTransactions = filteredTransactions.filter(
      (transaction) => transaction.category_id === category.id
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

  return transformedExpenseCategories;
};

export { calculateIncomeStats, calculateExpenseStats };
