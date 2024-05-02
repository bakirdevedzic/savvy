export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const formatMonth = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const extractYearMonth = (dateString) => {
  const [year, month] = dateString.split("-").slice(0, 2);
  return { year, month };
};

export function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }
}

export function transformMonth(inputDate) {
  const [yearStr, monthStr] = inputDate.split("-");

  const newDate = new Date(parseInt(yearStr), parseInt(monthStr), 1);

  const formattedDate = newDate.toISOString().slice(0, 10);

  return formattedDate;
}

export function getUsernameFromEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex !== -1) {
    return email.substring(0, atIndex);
  } else {
    return null;
  }
}

export function calculateBalanceBasedOnSpendingData(data) {
  const transactions = data.slice(1);

  const totals = transactions.reduce(
    (acc, current) => {
      acc.income += current[1];
      acc.expense += current[2];
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const overallBalance = totals.income - totals.expense;

  return overallBalance;
}
