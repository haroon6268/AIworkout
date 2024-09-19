import React from "react";
import fetcher from "../../../../utils/fetcher";
import { notFound } from "next/navigation";
import parse from "html-react-parser";

const page = async ({ params }) => {
  let data = await fetcher("/api?id=" + params.workoutId);
  console.log(data);
  if (data.status == 400) {
    notFound();
  }
  data = data.data;
  return (
    <div className="flex flex-col items-center px-8">
      <h1 className="text-3xl font-bold">
        Hello {data.name}, this is your workout:
      </h1>
      <br />
      {parse(data.workout)}
    </div>
  );
};

export default page;
