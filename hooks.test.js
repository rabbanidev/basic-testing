import {
  describe,
  it,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
} from "vitest";
import {
  addUser,
  clearUsers,
  deleteUser,
  editUser,
  getAllUsers,
  getUserById,
  initUsers,
} from "./hooks";

const user = { id: "1", name: "Golam Rabbani" };
const newUser = { id: "2", name: "Hasan" };
const updatedUser = { id: "2", name: "Naim" };

beforeAll(() => {
  console.log("Init users");
  clearUsers();
  initUsers([user]);
});

afterAll(() => {
  console.log("Clear users");
  clearUsers();
});

beforeEach(() => {
  console.log("Call before each test");
});

afterEach(() => {
  console.log("Call after each test");
});

describe("Hooks Test Suite", () => {
  it("Get all users after init", () => {
    const users = getAllUsers();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual(user);
  });

  it("Add new user", () => {
    const returnUser = addUser(newUser);
    expect(returnUser).toEqual(newUser);
  });

  it("Get all users after adding new user", () => {
    const users = getAllUsers();
    expect(users.length).toBe(2);
    expect(users[1]).toEqual(newUser);
  });

  it("Update old user", () => {
    const returnUser = editUser(updatedUser);
    expect(returnUser).toEqual(updatedUser);
  });

  it("Get all users after adding new user", () => {
    const users = getAllUsers();
    expect(users.length).toBe(2);
    expect(users[1]).toEqual(updatedUser);
  });

  it("Get a single user", () => {
    const returnUser = getUserById(user.id);
    expect(returnUser).toEqual(user);
  });

  it("Delete a single user", () => {
    const returnUser = deleteUser(updatedUser.id);
    expect(returnUser).toEqual(updatedUser);
  });

  it("Get all users after deleteing user", () => {
    const users = getAllUsers();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual(user);
  });

  it("should throw error when adding duplicate user", () => {
    expect(() => addUser(user)).toThrow("User already exists");
  });

  it("should throw error when editing non-existing user", () => {
    expect(() => editUser({ id: "999", name: "Unknown" })).toThrow(
      "User not found"
    );
  });
});
