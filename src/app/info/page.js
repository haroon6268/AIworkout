"use client";

import { useState } from "react";
import CardHolder from "../components/CardHolder";

const InfoPage = () => {
  const [data, setData] = useState({ progress: 1 });
  return (
    <div className="flex flex-col justify-center items-center space-y-10 min-h-[80vh]">
      {data.progress != 4 ? (
        <progress
          className="progress progress-primary w-56"
          value={data.progress}
          max="4"
        ></progress>
      ) : (
        ""
      )}
      <CardHolder data={data} setData={setData} />
    </div>
  );
};

export default InfoPage;
