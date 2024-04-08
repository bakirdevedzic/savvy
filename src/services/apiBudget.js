import supabase from "./supabase";

export async function fetchBudgets() {
  let { data, error } = await supabase.from("budgets").select("*");

  if (error) {
    throw new Error("Budgets could not be loaded");
  }

  return data;
}
