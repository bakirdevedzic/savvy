import supabase from "./supabase";

export async function apiBegi() {
  let { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    console.log(error);
    throw new Error("error:", error);
  }
  return data;
}
