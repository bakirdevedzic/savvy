import supabase from "./supabase";

export async function fetchGoals() {
  let { data, error } = await supabase.from("goals").select("*");

  if (error) {
    throw new Error("Goals could not be loaded");
  }

  return data;
}

export async function addGoal(newGoal) {
  const { data, error } = await supabase
    .from("goals")
    .insert([newGoal])
    .select();

  if (error) {
    throw new Error("Error uploading goal");
  }

  return data[0];
}

export async function deleteGoal(id) {
  const { error } = await supabase.from("goals").delete().eq("id", id);

  if (error) {
    throw new Error("Goal could not be deleted");
  }

  return id;
}

export async function editGoal(editedGoal) {
  const { data, error } = await supabase
    .from("goals")
    .update(editedGoal)
    .eq("id", editedGoal.id)
    .select();

  if (error) {
    throw new Error("Goal could not be edited");
  }

  return data[0];
}
