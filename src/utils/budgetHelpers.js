export function checkIfMonthIsUnique(budgets, month) {
  for (const budget of budgets) {
    if (budget.month.slice(0, 7) === month) {
      return true;
    }
  }
  return false;
}
