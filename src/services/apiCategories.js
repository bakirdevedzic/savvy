import supabase from "./supabase";

export async function fetchCategories() {
  let { data, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error("Categories could not be loaded");
  }

  return data;
}
