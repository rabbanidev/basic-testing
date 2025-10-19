export const nameAndTitlePromise = async (name, title, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || !title) {
        cb("Both name and title are required.", null);
        reject("Both name and title are required.");
      } else {
        cb(null, `${title} ${name}`);
        resolve(`${title} ${name}`);
      }
    }, 1000);
  });
};

export const fetchTodo = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error("Todo not found");
  }
  return res.json();
};
