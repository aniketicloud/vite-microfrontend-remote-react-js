import { useState } from "react";

export const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        style={{
          padding: "20px",
          backgroundColor: "greenyellow",
          color: "black",
        }}
      >
        Click me {counter}
      </button>
    </>
  );
};
