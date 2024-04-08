import supabase from "./supabase";

export async function fetchGoals() {
  let { data, error } = await supabase.from("goals").select("*");

  if (error) {
    throw new Error("Goals could not be loaded");
  }

  return data;
}
