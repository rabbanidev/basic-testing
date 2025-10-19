export const convertToNumber = (value) => {
  if (isNaN(value)) {
    throw new Error("Invalid input");
  }

  return Number(value);
};
