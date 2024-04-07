import supabase from "./supabase";

export async function fetchTransactions() {
  let { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    throw new Error("Transactions could not be loaded");
  }

  return data;
}
