import React from "react";

export const NumberInput = ({ input, setInput, error, setError }) => {
  const handleChange = (x) => {
    if (x > 7 || x < 1) {
      setError("Quantity must be more than 1 and less than 7");
    } else {
      setError(null);
    }
    setInput(x);
  };
  return (
    <input
      type="number"
      placeholder="Type here"
      className="input input-bordered w-full max-w-xs text-base-content"
      value={input}
      min={1}
      max={7}
      onChange={(x) => handleChange(x.target.value)}
    />
  );
};
