const log = (message) => {
  console.log(message);
};

export const generateLog = (logger) => {
  const message = "This is a log message";
  if (logger) logger(message);
  return message;
};

// const data = generateLog(log);
