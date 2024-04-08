import supabase from "./supabase";

export async function fetchCategories() {
  let { data, error } = await supabase.from("categories").select("*");
  console.log("data", data);
  if (error) {
    throw new Error("Categories could not be loaded");
  }

  return data;
}
