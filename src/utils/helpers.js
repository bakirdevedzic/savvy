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
