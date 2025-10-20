import path from "path";
import { promises as fs } from "fs";

export const saveTokenIntoFile = async (token, fileName) => {
  const filePath = path.join(process.cwd(), "data", fileName);
  return fs.writeFile(filePath, token);
};

// const start = async () => {
//   await saveTokenIntoFile("Token", "token.txt");
// };

// start();
