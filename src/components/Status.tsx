import { useEffect, useState } from "react";

type StatusProps = {
  status: "success" | "error";
};

export default function Status({ status }: StatusProps) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  });

  const isSuccess = status === "success";

  return (
    <div
      style={{
        color: isSuccess ? "green" : "red",
        fontWeight: "bold",
        fontSize: "20px",
        backgroundColor: isSuccess ? "#e8f5e9" : "#ffebee",
        padding: "10px 16px",
        borderRadius: "8px",
        border: isSuccess ? "2px solid green" : "2px solid red",
        textAlign: "center",
        width: "fit-content",
        margin: "10px auto",
      }}
      data-testid="status"
    >
      Status: {show && status}
    </div>
  );
}
