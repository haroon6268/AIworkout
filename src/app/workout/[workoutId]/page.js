import React from "react";
import fetcher from "../../../../utils/fetcher";
import { notFound } from "next/navigation";
import parse from "html-react-parser";

const page = async ({ params }) => {
  let data = await fetcher("/api?id=" + params.workoutId);
  if (data.status == 400) {
    notFound();
  }
  let workout = data.data.workout.data;
  let name = data.data.name;
  console.log(workout[0].exercises);
  return (
    <div className="flex flex-col items-center px-8">
      <div className="card bg-error text-primary-content w-96 m-5">
        <div className="card-body text-white font-bold">
          <p>If you would like to save your workout, please save the URL!</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold">
        Hello {name.charAt(0).toUpperCase() + name.slice(1)} , this is your
        workout:
      </h1>
      <br />
      <div className="flex flex-wrap items-center justify-center">
        {workout.map((x, i) => {
          return (
            <div
              key={{ i }}
              className="flex flex-col justify-center items-center w-[18rem] bg-primary text-primary-content rounded-3xl m-5 p-2"
            >
              <h2 className="text-2xl font-bold text-white">{x.day}</h2>
              {x.exercises.map((y, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center"
                  >
                    <p>
                      <span className="text-white font-bold">Exercise:</span>{" "}
                      {y.name}
                    </p>
                    <p>
                      <span className="text-white font-bold">Sets:</span>{" "}
                      {y.sets}
                    </p>
                    <p>
                      <span className="text-white font-bold">Reps:</span>
                      {y.reps}
                    </p>
                    <p>
                      <span className="text-white font-bold">Rest:</span>{" "}
                      {y.rest}
                    </p>
                    <br />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
