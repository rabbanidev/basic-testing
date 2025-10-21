import React, { useState } from "react";

interface User {
  id: number | string;
  name: string;
  title: string;
  role: "admin" | "user";
}

export default function Users({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers || []);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !title.trim()) return;

    const newUser: User = {
      id: Date.now(),
      name,
      title,
      role: users.length === 0 ? "admin" : "user",
    };

    setUsers((prev) => [...prev, { ...newUser }]);
    setName("");
    setTitle("");
  };

  return (
    <div className="users-container">
      <h1 className="users-title">User Manager</h1>
      <h2 className="users-title">User manage with form</h2>
      <h2 className="users-title">User manage with name and title</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button type="submit" className="add-btn">
          Add User
        </button>
      </form>

      {/* User List */}
      <ul className="user-list">
        {users.length === 0 ? (
          <p className="empty">No users added yet.</p>
        ) : (
          users.map((user) => (
            <li key={user.id} className="user-item">
              <strong>{user.name}</strong> <span>- {user.title}</span>
              {user.role === "admin" ? (
                <button>(Admin)</button>
              ) : (
                <button>(User)</button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
