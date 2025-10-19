export const convertToNumber = (value) => {
  console.log(isNaN(value));
  if (isNaN(value)) {
    throw new Error("Invalid input");
  }

  return Number(value);
};
