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
