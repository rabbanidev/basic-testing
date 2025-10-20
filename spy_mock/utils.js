function log(message) {
  console.log("Message: ", message);
}

export const generateToken = (logger) => {
  const token = Math.random().toString(36).substring(2);
  if (logger) logger(token);
  return token;
};

// const token = generateToken(log);
// console.log("Generated Token: ", token);
