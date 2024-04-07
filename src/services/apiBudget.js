import supabase from "./supabase";

export async function fetchBudgets() {
  let { data, error } = await supabase.from("budgets").select("*");
  console.log("data", data);
  if (error) {
    throw new Error("Budgets could not be loaded");
  }

  return data;
}
