export const add = (a, b) => {
  if (!a || !b) {
    throw new Error("Invalid input");
  }

  return Number(a) + Number(b);
};
