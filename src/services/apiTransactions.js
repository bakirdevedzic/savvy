import supabase from "./supabase";

export async function fetchTransactions() {
  let { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    throw new Error("Transactions could not be loaded");
  }

  return data;
}

export async function addTransaction(newTransaction) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([newTransaction])
    .select();

  if (error) {
    throw new Error("Error uploading transaction");
  }

  return data;
}
