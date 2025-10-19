const verifyStringNumber = (stringNum) => {
  if (typeof stringNum === "string" && stringNum.trim().length === 0) {
    throw new Error("Empty string not allowed.");
  }

  const num = Number(stringNum);
  if (isNaN(num)) {
    throw new Error(`Not a valid number: ${stringNum}`);
  }

  return true;
};

const convertStringToNumber = (stringNum) => {
  return Number(stringNum);
};

export const stringNumsConvertNums = (stringNums) => {
  if (!Array.isArray(stringNums)) {
    throw new Error("Input must be an array.");
  }

  const output = [];
  for (const stringNum of stringNums) {
    verifyStringNumber(stringNum);
    const num = convertStringToNumber(stringNum);
    output.push(num);
  }

  return output;
};
