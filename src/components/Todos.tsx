import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch todos!");
        }

        const json: Todo[] = await res.json();
        setTodos(json);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "blue",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Loading todos...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Todo List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: todo.completed ? "#e8f5e9" : "#ffebee",
              border: `1px solid ${todo.completed ? "green" : "red"}`,
              padding: "10px 15px",
              margin: "8px 0",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{todo.title}</span>
            <span
              style={{
                color: todo.completed ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
