import React from "react";

const CheckInput = ({ input, setInput }) => {
  const handleChange = (name, x) => {
    setInput({ ...input, [name]: x.target.checked });
  };
  return (
    <div className="form-control mb-4">
      <label className="label cursor-pointer">
        <span className="label-text text-secondary-content font-bold text-lg">
          Fat Loss
        </span>
        <input
          type="checkbox"
          className="checkbox border-white"
          onChange={(x) => handleChange("fatLoss", x)}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text text-secondary-content font-bold text-lg">
          Muscle Gain
        </span>
        <input
          type="checkbox"
          className="checkbox border-white"
          onChange={(x) => handleChange("muscleGain", x)}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text text-secondary-content font-bold text-lg">
          Strength Gain
        </span>
        <input
          type="checkbox"
          className="checkbox border-white"
          onChange={(x) => handleChange("strengthGain", x)}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text text-secondary-content font-bold text-lg">
          Endurance
        </span>
        <input
          type="checkbox"
          className="checkbox border-white"
          onChange={(x) => handleChange("endurance", x)}
        />
      </label>
    </div>
  );
};

export default CheckInput;
