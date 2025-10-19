export const strLength = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str.length;
};
