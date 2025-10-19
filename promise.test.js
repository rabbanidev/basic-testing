import { it, expect, describe } from "vitest";
import { fetchTodo, nameAndTitlePromise } from "./promise";

describe("nameAndTitlePromise()", () => {
  it("should resolve with the correct title and name", async () => {
    const callback = (error, result) => {
      if (error) {
        expect(error).toBe("Both name and title are required.");
      } else {
        expect(result).toBe("Mr. Golam Rabbani");
      }
    };
    nameAndTitlePromise("Golam Rabbani", "Mr.", callback);
  });

  it("throws error if name or title is missing", async () => {
    const callback = (error, result) => {
      if (error) {
        expect(error).toBe("Both name and title are required.");
      } else {
        expect(result).toBe("Mr. Golam Rabbani");
      }
    };
    nameAndTitlePromise(undefined, "Mr.", callback);
  });
});

describe("fetchTodo()", () => {
  it("should fetch a todo item", async () => {
    const res = await fetchTodo({ id: 1 });

    expect(res).toHaveProperty("id");
    expect(res.id).toBe(1);
  });

  it("should throw an error for invalid id", async () => {
    try {
      const res = await fetchTodo({ id: 9999 });
    } catch (error) {
      expect(error.message).toBe("Todo not found");
    }
  });
});
