export function checkIfMonthIsUnique(budgets, month) {
  for (const budget of budgets) {
    if (budget.month.slice(0, 7) === month) {
      return true;
    }
  }
  return false;
}

export function currentBudget(budgets) {
  if (!budgets) return null;
  const today = new Date();
  const currentBudget = budgets.find((budget) => {
    const budgetDate = new Date(budget.month);
    return (
      budgetDate.getFullYear() === today.getFullYear() &&
      budgetDate.getMonth() === today.getMonth()
    );
  });
  if (currentBudget) {
    return currentBudget;
  } else {
    return null;
  }
}

export function isFromLastMonth(date) {
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);

  const isLastMonthDecember = today.getMonth() === 0 && date.getMonth() === 11;

  return (date >= lastMonth && date < today) || isLastMonthDecember;
}

export function calculateMonthSpendings(transactions, targetMonth) {
  const targetDate = new Date(targetMonth);

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate.getMonth() === targetDate.getMonth() &&
      transactionDate.getFullYear() === targetDate.getFullYear() &&
      transaction.type === "EXPENSE"
    );
  });

  const totalSpent = filteredTransactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  return totalSpent;
}
