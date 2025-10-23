type DebugProps = {
  users: {
    id: string;
    name: string;
    role: string;
  }[];
};

export default function Debug({ users }: DebugProps) {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "30px auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        Debuging
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Role</th>
          </tr>
        </thead>

        <tbody data-testid="debug_users_table_body">
          {users.map((user, index) => (
            <tr
              key={user.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
                transition: "background-color 0.3s",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
