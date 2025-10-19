export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (typeof email !== "string") {
    throw new Error("Email must be a string");
  } else if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
  return true;
};

export const validateArrayNotEmpty = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  } else if (arr.length === 0) {
    throw new Error("Array must be non empty");
  }

  return true;
};
