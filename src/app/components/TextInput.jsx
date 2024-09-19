import React from "react";

export const TextInput = ({ input, setInput }) => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered w-full max-w-xs text-base-content"
      value={input}
      onChange={(x) => setInput(x.target.value)}
    />
  );
};
