const users = [];

export const initUsers = (newUsers) => {
  newUsers.forEach((user) => users.push(user));
};

export const addUser = (newUser) => {
  const exists = users.find((user) => user.id === newUser.id);
  if (exists) throw new Error("User already exists");
  users.push(newUser);
  return newUser;
};

export const editUser = (updatedUser) => {
  const index = users.findIndex((user) => user.id === updatedUser.id);
  if (index === -1) {
    throw new Error("User not found");
  }
  users[index] = { ...users[index], ...updatedUser };
  return users[index];
};

export const getUserById = (id) => {
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error("User not found");
  return user;
};

export const deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");
  const deleted = users.splice(index, 1)[0];
  return deleted;
};

export const getAllUsers = () => [...users];

export const clearUsers = () => {
  users.length = 0;
};
