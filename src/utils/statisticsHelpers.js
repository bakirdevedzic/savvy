import { calculateMonthSpendings } from "./budgetHelpers";
import { formatMonth } from "./helpers";

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

export function calculateMonthEarning(transactions, targetMonth) {
  const targetDate = new Date(targetMonth);

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate.getMonth() === targetDate.getMonth() &&
      transactionDate.getFullYear() === targetDate.getFullYear() &&
      transaction.type === "INCOME"
    );
  });

  const totalSpent = filteredTransactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  return totalSpent;
}

export const generateChartData = (transactions, firstMonth, lastMonth) => {
  const data = [["Month and year", "Incomes", "Expenses"]];

  let currentDate = new Date(firstMonth);
  while (currentDate <= lastMonth) {
    const formattedDate = formatMonth(currentDate);

    const income = calculateMonthEarning(transactions, currentDate);
    const expenses = calculateMonthSpendings(transactions, currentDate);

    data.push([formattedDate, income, expenses]);

    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return data;
};

export const calculateTotalAmount = (arrayOfObjects) => {
  return arrayOfObjects.reduce((total, item) => total + item.amount, 0);
};
