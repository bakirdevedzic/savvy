import supabase from "./supabase";

export async function fetchBudgets() {
  let { data, error } = await supabase
    .from("budgets")
    .select("*")
    .order("month", { ascending: false });

  if (error) {
    throw new Error("Budgets could not be loaded");
  }

  return data;
}

export async function addBudget(newBudget) {
  const { data, error } = await supabase
    .from("budgets")
    .insert([newBudget])
    .select();

  if (error) {
    throw new Error("Error uploading budget");
  }

  return data[0];
}
