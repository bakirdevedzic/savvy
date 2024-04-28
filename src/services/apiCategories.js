import supabase from "./supabase";

export async function fetchCategories(userId) {
  let { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("user_id", userId)
    .order("id", { ascending: false });

  if (error) {
    throw new Error("Categories could not be loaded");
  }

  return data;
}

export async function addCategory(newCategory) {
  console.log(newCategory);
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory])
    .select();

  if (error) {
    throw new Error("Error uploading category");
  }

  return data[0];
}

export async function editCategory(editedCategory) {
  console.log(editedCategory);
  let editedCategoryCopy = { ...editedCategory };
  delete editedCategoryCopy.amount;
  delete editedCategoryCopy.transactions;
  const { data, error } = await supabase
    .from("categories")
    .update(editedCategoryCopy)
    .eq("id", editedCategoryCopy.id)
    .select();

  if (error) {
    throw new Error("Category could not be edited");
  }

  return data[0];
}

export async function deleteCateogry(id) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    throw new Error("Category could not be deleted");
  }

  return id;
}
