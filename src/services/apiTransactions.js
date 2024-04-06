import supabase from "./supabase";

export async function fetchTransactions() {
  let { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    console.log(error);
    throw new Error("Transactions could not be loaded");
  }
  console.log("data", data);
  return data;
}
