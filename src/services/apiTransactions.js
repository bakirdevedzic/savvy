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

export async function deleteTransaction(id) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);

  if (error) {
    throw new Error("Transaction could not be deleted");
  }

  return id;
}

export async function editTransaction(editedTransaction) {
  console.log(editedTransaction);
  const { data, error } = await supabase
    .from("transactions")
    .update(editedTransaction)
    .eq("id", editedTransaction.id)
    .select();

  if (error) {
    throw new Error("Transaction could not be deleted");
  }

  return data;
}
