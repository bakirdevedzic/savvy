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
