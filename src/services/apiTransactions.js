import supabase from "./supabase";

export async function fetchTransactions(userId) {
  console.log("userid-api", userId);
  let { data, error } = await supabase
    .from("transactions")
    .select(
      `
    *,
    categories (id, name)
  `
    )
    .eq("user_id", userId)
    .order("date", { ascending: false });

  if (error) {
    throw new Error("Transactions could not be loaded");
  }

  return data;
}

export async function addTransaction(newTransaction) {
  console.log("newTransaction", newTransaction);
  const { data, error } = await supabase
    .from("transactions")
    .insert([newTransaction])
    .select();

  if (error) {
    throw new Error("Error uploading transaction");
  }

  // Get the inserted transaction ID (assuming there's an ID column)
  const insertedTransactionId = data[0].id;

  // Perform a separate query to fetch the inserted transaction with category name
  const { data: transactionWithCategory, error: fetchError } = await supabase
    .from("transactions")
    .select(`*, categories (id, name)`)
    .eq("id", insertedTransactionId)
    .single();

  if (fetchError) {
    throw new Error("Error fetching inserted transaction");
  }

  return [transactionWithCategory]; // This includes the category name
}

export async function deleteTransaction(id) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);

  if (error) {
    throw new Error("Transaction could not be deleted");
  }

  return id;
}

export async function editTransaction(editedTransaction) {
  delete editedTransaction.categories;
  const { data, error } = await supabase
    .from("transactions")
    .update(editedTransaction)
    .eq("id", editedTransaction.id)
    .select();

  if (error) {
    throw new Error("Transaction could not be edited");
  }

  // Get the inserted transaction ID (assuming there's an ID column)
  const insertedTransactionId = data[0].id;

  // Perform a separate query to fetch the inserted transaction with category name
  const { data: transactionWithCategory, error: fetchError } = await supabase
    .from("transactions")
    .select(`*, categories (id, name)`)
    .eq("id", insertedTransactionId)
    .single();

  if (fetchError) {
    throw new Error("Error fetching edited transaction");
  }

  return transactionWithCategory;
}
