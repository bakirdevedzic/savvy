import supabase from "./supabase";

export async function fetchTransactions() {
  let { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    throw new Error("Transactions could not be loaded");
  }

  return data;
}

export async function addTransaction(newTransaction) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([newTransaction]);
  console.log(data);
  if (error) {
    throw new Error("Error uploading transaction");
  }

  return newTransaction;
}
