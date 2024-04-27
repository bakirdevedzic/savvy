import supabase from "./supabase";

export async function fetchGoals(userId) {
  let { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", userId)
    .order("start_date", { ascending: true });

  if (error) {
    throw new Error("Goals could not be loaded");
  }

  return data;
}

export async function addGoal(newGoal) {
  let start_date = new Date();
  const offset = start_date.getTimezoneOffset();
  start_date = new Date(start_date.getTime() - offset * 60 * 1000);

  const { data, error } = await supabase
    .from("goals")
    .insert([
      {
        ...newGoal,
        active: true,
        start_date: start_date.toISOString().split("T")[0],
      },
    ])
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

export async function updateSavedAmount({ add_amount, id, saved_amount }) {
  const new_amount = saved_amount + add_amount;

  const { data, error } = await supabase
    .from("goals")
    .update({ saved_amount: new_amount })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Error updating saved_amount");
  }

  return data[0];
}
