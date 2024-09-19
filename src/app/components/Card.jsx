import React from "react";
import { useState } from "react";
import { TextInput } from "./TextInput";
import CheckInput from "./CheckInput";
import { NumberInput } from "./NumberInput";

const Card = ({ question, btn, data, setData, dataParam, inputType }) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(null);
  const onSubmit = () => {
    if (inputData.length == 0) {
      setError("Input cannot be Empty");
      return;
    }
    setError("");
    setData({
      ...data,
      [dataParam]: inputData,
      progress: (data.progress += 1),
    });
    setInputData("");
  };
  if (inputType == "text") {
    return (
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <div className="">
            <div className="label">
              <span className="label-text text-red-500 font-bold">{error}</span>
            </div>
            <TextInput input={inputData} setInput={setInputData} />
          </div>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => onSubmit()}>
              {btn}
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (inputType == "checkbox") {
    return (
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <div className="">
            <div className="label">
              <span className="label-text text-red-500 font-bold">{error}</span>
            </div>
            <CheckInput input={inputData} setInput={setInputData} />
          </div>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => onSubmit()}>
              {btn}
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (inputType == "number") {
    return (
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <div className="">
            <div className="label">
              <span className="label-text text-red-500 font-bold">{error}</span>
            </div>
            <NumberInput
              input={inputData}
              setInput={setInputData}
              error={error}
              setError={setError}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => onSubmit()}>
              {btn}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
