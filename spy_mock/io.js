import { promises as fs } from "fs";
import path from "path";

export const storeToken = (token, fileName) => {
  const storePath = path.join(process.cwd(), "spy_mock", "data", fileName);
  return fs.writeFile(storePath, token);
};

// const start = async () => {
//   await storeToken("my-secret-token", "token.txt");
// };

// start();
