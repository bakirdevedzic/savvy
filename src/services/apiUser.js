import supabase from "./supabase";

export async function fetchUser(id) {
  let { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    throw new Error("User could not be loaded");
  }

  if (data[0].balance === null) data[0].balance = 0;
  return data[0];
}

export async function editUser(editedUser) {
  console.log(editedUser);
  const { data, error } = await supabase
    .from("users")
    .update(editedUser)
    .eq("id", editedUser.id)
    .select();

  if (error) {
    throw new Error("User could not be edited");
  }

  return data[0];
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
