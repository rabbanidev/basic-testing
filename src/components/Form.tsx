import React, { useState } from "react";

type FormProps = {
  onSubmit: (data: string) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(value);

    // Reset
    setValue("");
  };

  return (
    <div
      style={{
        margin: 100,
        textAlign: "center",
      }}
    >
      <h6>Value: {value}</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
